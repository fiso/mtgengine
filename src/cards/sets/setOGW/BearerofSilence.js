"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BearerofSilence extends UnimplementedCard {
  constructor (game) {
    super(game, "Bearer of Silence", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = BearerofSilence;
