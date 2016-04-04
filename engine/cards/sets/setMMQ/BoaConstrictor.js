"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BoaConstrictor extends Card {
  constructor(game) {
    super(game, "Boa Constrictor", "Mercadian Masques", "MMQ");
  }
}

module.exports = BoaConstrictor;
