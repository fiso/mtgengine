"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MonstrousCarabid extends Card {
  constructor(game) {
    super(game, "Monstrous Carabid", "Alara Reborn", "ARB");
  }
}

module.exports = MonstrousCarabid;
