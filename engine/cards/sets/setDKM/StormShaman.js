"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const StormShamanBase = require("../setALL/StormShaman.js");

class StormShaman extends StormShamanBase {
  constructor(game) {
    super(game, "Storm Shaman", "Deckmasters", "DKM");
  }
}

module.exports = StormShaman;
