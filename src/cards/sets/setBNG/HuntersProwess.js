"use strict";
const Constants = require ("../../../Constants");
const HuntersProwessBase = require("../setE02/HuntersProwess");

class HuntersProwess extends HuntersProwessBase {
  constructor (game) {
    super(game, "Hunter's Prowess", "Born of the Gods", "BNG");
  }
}

module.exports = HuntersProwess;
