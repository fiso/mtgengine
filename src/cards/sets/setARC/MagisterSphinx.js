"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MagisterSphinx extends UnimplementedCard {
  constructor(game) {
    super(game, "Magister Sphinx", "Archenemy", "ARC");
  }
}

module.exports = MagisterSphinx;
