"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Persuasion extends Card {
  constructor(game) {
    super(game, "Persuasion", "Odyssey", "ODY");
  }
}

module.exports = Persuasion;
