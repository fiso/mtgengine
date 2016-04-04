"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Confessor extends Card {
  constructor(game) {
    super(game, "Confessor", "Odyssey", "ODY");
  }
}

module.exports = Confessor;
