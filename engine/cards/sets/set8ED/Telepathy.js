"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Telepathy extends Card {
  constructor(game) {
    super(game, "Telepathy", "Eighth Edition", "8ED");
  }
}

module.exports = Telepathy;
