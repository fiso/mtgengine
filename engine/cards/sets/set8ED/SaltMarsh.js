"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SaltMarsh extends Card {
  constructor(game) {
    super(game, "Salt Marsh", "Eighth Edition", "8ED");
  }
}

module.exports = SaltMarsh;
