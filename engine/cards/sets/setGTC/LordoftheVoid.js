"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LordoftheVoid extends Card {
  constructor(game) {
    super(game, "Lord of the Void", "Gatecrash", "GTC");
  }
}

module.exports = LordoftheVoid;
