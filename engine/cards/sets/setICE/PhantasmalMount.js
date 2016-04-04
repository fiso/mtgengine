"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PhantasmalMount extends Card {
  constructor(game) {
    super(game, "Phantasmal Mount", "Ice Age", "ICE");
  }
}

module.exports = PhantasmalMount;
