"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Ow extends Card {
  constructor(game) {
    super(game, "Ow", "Unglued", "UGL");
  }
}

module.exports = Ow;
