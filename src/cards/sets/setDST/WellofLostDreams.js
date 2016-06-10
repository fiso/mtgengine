"use strict";
const Constants = require ("../../../Constants");
const WellofLostDreamsBase = require("../setC13/WellofLostDreams");

class WellofLostDreams extends WellofLostDreamsBase {
  constructor (game) {
    super(game, "Well of Lost Dreams", "Darksteel", "DST");
  }
}

module.exports = WellofLostDreams;
