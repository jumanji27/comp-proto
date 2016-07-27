### Install Deps

Install Go (1.4.2) and prepare default GOPATH/GOROOT env variable

Install Node (0.12.7)

##### Install Deps

    sudo cp -r server/vend ~/go/src
    cd client/builder && npm install && sudo npm install -g gulp@3.9.0 bower@1.6.5 && bower install

##### Build and run

    go build -o server/comp_proto server/comp_proto.go && MARTINI_ENV=production server/comp_proto
    cd client/builder && gulp build

##### Run Dev Server

    go run server/comp_proto.go
    cd client/builder && gulp run