"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BurningVengeance extends Card {
  constructor(game) {
    super(game, "Burning Vengeance", "Innistrad", "ISD");
  }
}

module.exports = BurningVengeance;
