"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GiantTrapDoorSpiderBase = require("../setCST/GiantTrapDoorSpider.js");

class GiantTrapDoorSpider extends GiantTrapDoorSpiderBase {
  constructor(game) {
    super(game, "Giant Trap Door Spider", "Deckmasters", "DKM");
  }
}

module.exports = GiantTrapDoorSpider;
