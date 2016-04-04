"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Sunscour extends Card {
  constructor(game) {
    super(game, "Sunscour", "Coldsnap", "CSP");
  }
}

module.exports = Sunscour;
