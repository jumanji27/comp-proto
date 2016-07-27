### Install Deps

Install Go (1.4.2) and prepare default GOPATH/GOROOT env variable

Install Node (0.12.7)

    cd server && go get github.com/go-martini/martini && go get github.com/martini-contrib/render
    cd client/builder && npm install && bower install && npm install -g gulp

##### Build and run

    go build -o server/comp_proto server/comp_proto.go && MARTINI_ENV=production server/comp_proto
    cd client/builder && gulp build

##### Run Dev Server

    go run server/comp_proto.go
    cd client/builder && gulp run