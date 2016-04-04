"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LightningAngel extends Card {
  constructor(game) {
    super(game, "Lightning Angel", "Apocalypse", "APC");
  }
}

module.exports = LightningAngel;
