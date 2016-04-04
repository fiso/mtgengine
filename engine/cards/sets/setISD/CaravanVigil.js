"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CaravanVigil extends Card {
  constructor(game) {
    super(game, "Caravan Vigil", "Innistrad", "ISD");
  }
}

module.exports = CaravanVigil;
