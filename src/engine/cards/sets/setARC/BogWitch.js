"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BogWitch extends UnimplementedCard {
  constructor (game) {
    super(game, "Bog Witch", "Archenemy", "ARC");
  }
}

module.exports = BogWitch;
