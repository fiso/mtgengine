"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WandofDenial extends Card {
  constructor(game) {
    super(game, "Wand of Denial", "Classic Sixth Edition", "6ED");
  }
}

module.exports = WandofDenial;
