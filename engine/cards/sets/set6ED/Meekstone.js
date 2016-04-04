"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Meekstone extends Card {
  constructor(game) {
    super(game, "Meekstone", "Classic Sixth Edition", "6ED");
  }
}

module.exports = Meekstone;
