"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class JestersSombrero extends Card {
  constructor(game) {
    super(game, "Jester's Sombrero", "Unglued", "UGL");
  }
}

module.exports = JestersSombrero;
