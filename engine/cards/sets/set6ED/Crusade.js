"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Crusade extends Card {
  constructor(game) {
    super(game, "Crusade", "Classic Sixth Edition", "6ED");
  }
}

module.exports = Crusade;
