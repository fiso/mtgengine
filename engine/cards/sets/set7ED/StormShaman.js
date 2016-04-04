"use strict";
const Constants = require ("../../../Constants");
const StormShamanBase = require("../setALL/StormShaman");

class StormShaman extends StormShamanBase {
  constructor(game) {
    super(game, "Storm Shaman", "Seventh Edition", "7ED");
  }
}

module.exports = StormShaman;
