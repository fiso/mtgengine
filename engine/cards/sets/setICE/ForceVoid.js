"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ForceVoid extends Card {
  constructor(game) {
    super(game, "Force Void", "Ice Age", "ICE");
  }
}

module.exports = ForceVoid;
