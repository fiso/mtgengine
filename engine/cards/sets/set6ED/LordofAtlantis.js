"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LordofAtlantis extends Card {
  constructor(game) {
    super(game, "Lord of Atlantis", "Classic Sixth Edition", "6ED");
  }
}

module.exports = LordofAtlantis;
