"use strict";
const Constants = require ("../../../Constants");
const StormShamanBase = require("../setDKM/StormShaman");

class StormShaman extends StormShamanBase {
  constructor (game) {
    super(game, "Storm Shaman", "Alliances", "ALL");
  }
}

module.exports = StormShaman;
