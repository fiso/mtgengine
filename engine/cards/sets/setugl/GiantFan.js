"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GiantFan extends Card {
  constructor(game) {
    super(game, "Giant Fan", "Unglued", "UGL");
  }
}

module.exports = GiantFan;
