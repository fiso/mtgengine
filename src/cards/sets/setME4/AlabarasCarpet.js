"use strict";
const Constants = require ("../../../Constants");
const AlabarasCarpetBase = require("../setLEG/AlabarasCarpet");

class AlabarasCarpet extends AlabarasCarpetBase {
  constructor (game) {
    super(game, "Al-abara's Carpet", "Masters Edition IV", "ME4");
  }
}

module.exports = AlabarasCarpet;
