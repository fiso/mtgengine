"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LilianasShade extends Card {
  constructor(game) {
    super(game, "Liliana's Shade", "Magic 2013", "M13");
  }
}

module.exports = LilianasShade;
