"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Unsummon extends Card {
  constructor(game) {
    super(game, "Unsummon", "Classic Sixth Edition", "6ED");
  }
}

module.exports = Unsummon;
