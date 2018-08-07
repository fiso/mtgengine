"use strict";
const Constants = require ("../../../Constants");
const NetcasterSpiderBase = require("../setIMA/NetcasterSpider");

class NetcasterSpider extends NetcasterSpiderBase {
  constructor (game) {
    super(game, "Netcaster Spider", "Magic 2015", "M15");
  }
}

module.exports = NetcasterSpider;
