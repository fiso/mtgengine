"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Misstep extends Card {
  constructor(game) {
    super(game, "Misstep", "Mercadian Masques", "MMQ");
  }
}

module.exports = Misstep;
