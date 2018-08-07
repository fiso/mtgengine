"use strict";
const Constants = require ("../../../Constants");
const ChandrasOutrageBase = require("../setA25/ChandrasOutrage");

class ChandrasOutrage extends ChandrasOutrageBase {
  constructor (game) {
    super(game, "Chandra's Outrage", "Magic 2011", "M11");
  }
}

module.exports = ChandrasOutrage;
