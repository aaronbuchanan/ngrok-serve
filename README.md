# ngrok-serve
Serve a directory and spawn a ngrok process to tunnel it.

## Install
```
$ npm install -g ngrok-serve
```

## Usage
```
$ ns [flags]
```

#### flags
 - `-p [port]`: Specifies the port for the HTTP server to listen on. (Default `8080`)
 - `-d [path]`: Specifies the directory to server. (Default: cwd)
 - `-v`: Verbose output. (Default: `false`)

#### Example
```
$ ns -p 9000 -d ~/Pictures -v
```
