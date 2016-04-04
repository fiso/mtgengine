"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ReaveSoul extends Card {
  constructor(game) {
    super(game, "Reave Soul", "Magic Origins", "ORI");
  }
}

module.exports = ReaveSoul;
