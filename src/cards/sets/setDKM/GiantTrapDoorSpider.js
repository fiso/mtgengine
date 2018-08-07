"use strict";
const Constants = require ("../../../Constants");
const GiantTrapDoorSpiderBase = require("../setME2/GiantTrapDoorSpider");

class GiantTrapDoorSpider extends GiantTrapDoorSpiderBase {
  constructor (game) {
    super(game, "Giant Trap Door Spider", "Deckmasters", "DKM");
  }
}

module.exports = GiantTrapDoorSpider;
