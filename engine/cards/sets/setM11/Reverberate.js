"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Reverberate extends UnimplementedCard {
  constructor(game) {
    super(game, "Reverberate", "Magic 2011", "M11");
  }
}

module.exports = Reverberate;
