"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DevoutWitness extends Card {
  constructor(game) {
    super(game, "Devout Witness", "Mercadian Masques", "MMQ");
  }
}

module.exports = DevoutWitness;
