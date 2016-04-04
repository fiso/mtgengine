"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const NetcasterSpiderBase = require("../setDDO/NetcasterSpider.js");

class NetcasterSpider extends NetcasterSpiderBase {
  constructor(game) {
    super(game, "Netcaster Spider", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = NetcasterSpider;
