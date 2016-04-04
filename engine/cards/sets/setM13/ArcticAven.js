"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ArcticAven extends Card {
  constructor(game) {
    super(game, "Arctic Aven", "Magic 2013", "M13");
  }
}

module.exports = ArcticAven;
