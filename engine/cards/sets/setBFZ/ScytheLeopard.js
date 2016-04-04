"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ScytheLeopard extends Card {
  constructor(game) {
    super(game, "Scythe Leopard", "Battle for Zendikar", "BFZ");
  }
}

module.exports = ScytheLeopard;
