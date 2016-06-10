"use strict";
const Constants = require ("../../../Constants");
const StormShamanBase = require("../setALL/StormShaman");

class StormShaman extends StormShamanBase {
  constructor (game) {
    super(game, "Storm Shaman", "Deckmasters", "DKM");
  }
}

module.exports = StormShaman;
