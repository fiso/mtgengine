"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ReturntoBattle extends Card {
  constructor(game) {
    super(game, "Return to Battle", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = ReturntoBattle;
