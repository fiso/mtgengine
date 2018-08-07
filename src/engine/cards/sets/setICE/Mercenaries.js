"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Mercenaries extends UnimplementedCard {
  constructor (game) {
    super(game, "Mercenaries", "Ice Age", "ICE");
  }
}

module.exports = Mercenaries;
