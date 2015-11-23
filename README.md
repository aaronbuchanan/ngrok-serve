# ngrok-http
Serve a directory and spawn a ngrok process to tunnel it.

## Install
```
$ npm install -g ngrok-http
```

## Usage
```
$ nh [flags]
```

#### flags
 - `-p [port]`: Specifies the port for the HTTP server to listen on. (Default `8080`)
 - `-d [path]`: Specifies the directory to server. (Default: cwd)
 - `-v`: Verbose output. (Default: `false`)

#### Example
```
$ nh -p 9000 -d ~/Pictures -v
```
