"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Coercion extends Card {
  constructor(game) {
    super(game, "Coercion", "Beatdown Box Set", "BTD");
  }
}

module.exports = Coercion;
