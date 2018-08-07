"use strict";
const Constants = require ("../../../Constants");
const ChandrasOutrageBase = require("../setA25/ChandrasOutrage");

class ChandrasOutrage extends ChandrasOutrageBase {
  constructor (game) {
    super(game, "Chandra's Outrage", "Archenemy: Nicol Bolas", "E01");
  }
}

module.exports = ChandrasOutrage;
