"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const NetcasterSpiderBase = require("../setDDO/NetcasterSpider.js");

class NetcasterSpider extends NetcasterSpiderBase {
  constructor(game) {
    super(game, "Netcaster Spider", "Magic 2015 Core Set", "M15");
  }
}

module.exports = NetcasterSpider;
