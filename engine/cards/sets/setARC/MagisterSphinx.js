"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MagisterSphinx extends Card {
  constructor(game) {
    super(game, "Magister Sphinx", "Archenemy", "ARC");
  }
}

module.exports = MagisterSphinx;
