"use strict";
const Constants = require ("../../../Constants");
const NetcasterSpiderBase = require("../setDDO/NetcasterSpider");

class NetcasterSpider extends NetcasterSpiderBase {
  constructor(game) {
    super(game, "Netcaster Spider", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = NetcasterSpider;
