"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BoggartRamGang extends Card {
  constructor(game) {
    super(game, "Boggart Ram-Gang", "Gateway", "pGTW");
  }
}

module.exports = BoggartRamGang;
