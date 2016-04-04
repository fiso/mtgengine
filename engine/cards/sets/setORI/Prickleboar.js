"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Prickleboar extends Card {
  constructor(game) {
    super(game, "Prickleboar", "Magic Origins", "ORI");
  }
}

module.exports = Prickleboar;
