"use strict";
const Constants = require ("../../../Constants");
const HuntersProwessBase = require("../setE02/HuntersProwess");

class HuntersProwess extends HuntersProwessBase {
  constructor (game) {
    super(game, "Hunter's Prowess", "Archenemy: Nicol Bolas", "E01");
  }
}

module.exports = HuntersProwess;
