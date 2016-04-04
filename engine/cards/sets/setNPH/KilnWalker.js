"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KilnWalker extends Card {
  constructor(game) {
    super(game, "Kiln Walker", "New Phyrexia", "NPH");
  }
}

module.exports = KilnWalker;
