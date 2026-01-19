   fname = "tv.html";
    if (fs.existsSync("./" + req.url) && fs.lstatSync("./frontend/" + req.url).isFile()) {
        data = fs.readFileSync("./" + req.url);
        fname = req.url;
    } else {
        data = fs.readFileSync("./tv.html");
    }
    fname.endsWith(".js") ? res.writeHead(200, { "Content-Type": "text/javascript" }) : res.writeHead(200, {});
    if(!req.url.includes("../")) res.write(data);
    res.end();
});
