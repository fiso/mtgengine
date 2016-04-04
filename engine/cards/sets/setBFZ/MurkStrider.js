"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MurkStrider extends Card {
  constructor(game) {
    super(game, "Murk Strider", "Battle for Zendikar", "BFZ");
  }
}

module.exports = MurkStrider;
