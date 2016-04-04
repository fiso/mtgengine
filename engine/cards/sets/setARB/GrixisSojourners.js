"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GrixisSojourners extends Card {
  constructor(game) {
    super(game, "Grixis Sojourners", "Alara Reborn", "ARB");
  }
}

module.exports = GrixisSojourners;
