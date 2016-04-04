"use strict";
const Constants = require ("../../../Constants");
const SickeningDreamsBase = require("../setPD3/SickeningDreams");

class SickeningDreams extends SickeningDreamsBase {
  constructor(game) {
    super(game, "Sickening Dreams", "Torment", "TOR");
  }
}

module.exports = SickeningDreams;
