"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VoidSnare extends UnimplementedCard {
  constructor (game) {
    super(game, "Void Snare", "Magic 2015", "M15");
  }
}

module.exports = VoidSnare;
