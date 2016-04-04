"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Goldmeadow extends Card {
  constructor(game) {
    super(game, "Goldmeadow", "Planechase", "HOP");
  }
}

module.exports = Goldmeadow;
