"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Reverberate extends UnimplementedCard {
  constructor (game) {
    super(game, "Reverberate", "Magic 2013", "M13");
  }
}

module.exports = Reverberate;
