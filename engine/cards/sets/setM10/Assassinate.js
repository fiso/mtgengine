"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Assassinate extends Card {
  constructor(game) {
    super(game, "Assassinate", "Magic 2010", "M10");
  }
}

module.exports = Assassinate;
