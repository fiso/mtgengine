"use strict";
const Constants = require ("../../../Constants");
const KruinStrikerBase = require("../setDDS/KruinStriker");

class KruinStriker extends KruinStrikerBase {
  constructor (game) {
    super(game, "Kruin Striker", "Avacyn Restored", "AVR");
  }
}

module.exports = KruinStriker;
