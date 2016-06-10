"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Reverberation extends UnimplementedCard {
  constructor (game) {
    super(game, "Reverberation", "Legends", "LEG");
  }
}

module.exports = Reverberation;
