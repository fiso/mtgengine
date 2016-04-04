"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SickeningDreamsBase = require("../setPD3/SickeningDreams.js");

class SickeningDreams extends SickeningDreamsBase {
  constructor(game) {
    super(game, "Sickening Dreams", "Torment", "TOR");
  }
}

module.exports = SickeningDreams;
