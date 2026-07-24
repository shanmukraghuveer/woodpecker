import os
import sys
import base64
import json
import urllib.request

REPO_OWNER = "shanmukraghuveer"
REPO_NAME = "woodpecker"

def get_files_to_upload():
    files_list = []
    for root, dirs, files in os.walk("."):
        dirs[:] = [d for d in dirs if not d.startswith('.') and d not in ['mingit', 'brain', 'node_modules']]
        for file in files:
            if file.startswith('.') and file != '.gitignore':
                continue
            filepath = os.path.join(root, file).replace('\\', '/')
            if filepath.startswith('./'):
                filepath = filepath[2:]
            files_list.append(filepath)
    return files_list

def push_with_token(token):
    token = token.strip()
    headers = {
        "Authorization": f"token {token}",
        "Accept": "application/vnd.github.v3+json",
        "User-Agent": "Woodpecker-Uploader"
    }
    files = get_files_to_upload()
    print(f"\nUploading {len(files)} project files to https://github.com/{REPO_OWNER}/{REPO_NAME}...\n")
    
    success_count = 0
    for filepath in files:
        try:
            with open(filepath, "rb") as f:
                content = base64.b64encode(f.read()).decode("utf-8")
            
            url = f"https://api.github.com/repos/{REPO_OWNER}/{REPO_NAME}/contents/{filepath}"
            req = urllib.request.Request(url, headers=headers)
            sha = None
            try:
                with urllib.request.urlopen(req) as resp:
                    data = json.loads(resp.read().decode("utf-8"))
                    sha = data.get("sha")
            except Exception:
                pass
            
            payload = {
                "message": f"Upload {filepath} - Woodpecker Workshop",
                "content": content
            }
            if sha:
                payload["sha"] = sha
                
            req_put = urllib.request.Request(url, data=json.dumps(payload).encode("utf-8"), headers=headers, method="PUT")
            with urllib.request.urlopen(req_put) as resp:
                print(f" [OK] Uploaded {filepath}")
                success_count += 1
        except Exception as e:
            print(f" [FAIL] Failed to upload {filepath}: {e}")
            
    print(f"\nSuccessfully uploaded {success_count}/{len(files)} files to https://github.com/{REPO_OWNER}/{REPO_NAME}!")

if __name__ == "__main__":
    if len(sys.argv) > 1:
        push_with_token(sys.argv[1])
    else:
        tok = input("Enter your GitHub Personal Access Token: ")
        push_with_token(tok)
