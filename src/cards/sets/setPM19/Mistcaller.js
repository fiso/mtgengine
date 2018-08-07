"use strict";
const Constants = require ("../../../Constants");
const MistcallerBase = require("../setM19/Mistcaller");

class Mistcaller extends MistcallerBase {
  constructor (game) {
    super(game, "Mistcaller", "Core Set 2019 Promos", "PM19");
  }
}

module.exports = Mistcaller;
