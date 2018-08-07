"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StonehoofChieftain extends UnimplementedCard {
  constructor (game) {
    super(game, "Stonehoof Chieftain", "You Make the Cube", "PZ2");
  }
}

module.exports = StonehoofChieftain;
