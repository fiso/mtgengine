"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Resize extends Card {
  constructor(game) {
    super(game, "Resize", "Coldsnap", "CSP");
  }
}

module.exports = Resize;
