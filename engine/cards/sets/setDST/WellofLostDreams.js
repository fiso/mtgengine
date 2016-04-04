"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WellofLostDreamsBase = require("../setC13/WellofLostDreams.js");

class WellofLostDreams extends WellofLostDreamsBase {
  constructor(game) {
    super(game, "Well of Lost Dreams", "Darksteel", "DST");
  }
}

module.exports = WellofLostDreams;
