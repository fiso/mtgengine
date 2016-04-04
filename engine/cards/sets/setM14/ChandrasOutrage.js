"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ChandrasOutrageBase = require("../setARC/ChandrasOutrage.js");

class ChandrasOutrage extends ChandrasOutrageBase {
  constructor(game) {
    super(game, "Chandra's Outrage", "Magic 2014 Core Set", "M14");
  }
}

module.exports = ChandrasOutrage;
