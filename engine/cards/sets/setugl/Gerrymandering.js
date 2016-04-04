"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Gerrymandering extends Card {
  constructor(game) {
    super(game, "Gerrymandering", "Unglued", "UGL");
  }
}

module.exports = Gerrymandering;
