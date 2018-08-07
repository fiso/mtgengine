"use strict";
const Constants = require ("../../../Constants");
const NetcasterSpiderBase = require("../setIMA/NetcasterSpider");

class NetcasterSpider extends NetcasterSpiderBase {
  constructor (game) {
    super(game, "Netcaster Spider", "Conspiracy: Take the Crown", "CN2");
  }
}

module.exports = NetcasterSpider;
