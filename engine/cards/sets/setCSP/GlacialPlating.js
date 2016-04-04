"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GlacialPlating extends Card {
  constructor(game) {
    super(game, "Glacial Plating", "Coldsnap", "CSP");
  }
}

module.exports = GlacialPlating;
