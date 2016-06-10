"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DreamCoat extends UnimplementedCard {
  constructor (game) {
    super(game, "Dream Coat", "Legends", "LEG");
  }
}

module.exports = DreamCoat;
