"use strict";
const Constants = require ("../../../Constants");
const ChandrasOutrageBase = require("../setA25/ChandrasOutrage");

class ChandrasOutrage extends ChandrasOutrageBase {
  constructor (game) {
    super(game, "Chandra's Outrage", "Modern Masters 2017", "MM3");
  }
}

module.exports = ChandrasOutrage;
