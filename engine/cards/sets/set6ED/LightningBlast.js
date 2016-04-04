"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LightningBlast extends Card {
  constructor(game) {
    super(game, "Lightning Blast", "Classic Sixth Edition", "6ED");
  }
}

module.exports = LightningBlast;
