"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ChandrasOutrageBase = require("../setARC/ChandrasOutrage.js");

class ChandrasOutrage extends ChandrasOutrageBase {
  constructor(game) {
    super(game, "Chandra's Outrage", "Magic 2011", "M11");
  }
}

module.exports = ChandrasOutrage;
