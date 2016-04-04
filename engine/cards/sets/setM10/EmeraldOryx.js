"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class EmeraldOryx extends Card {
  constructor(game) {
    super(game, "Emerald Oryx", "Magic 2010", "M10");
  }
}

module.exports = EmeraldOryx;
