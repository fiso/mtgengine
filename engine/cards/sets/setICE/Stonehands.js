"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Stonehands extends Card {
  constructor(game) {
    super(game, "Stonehands", "Ice Age", "ICE");
  }
}

module.exports = Stonehands;
