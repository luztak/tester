var svr = require("./server");
var router = require("./router");
var reqs = require("./requests");
var template = require("./template");

var handlers = {}
handlers["/"] = reqs.home;
handlers["/archives"] = reqs.archives;
handlers["/essay"] = reqs.essay;

svr.start(router.route, handlers);
