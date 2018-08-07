"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BeaconofImmortality extends UnimplementedCard {
  constructor (game) {
    super(game, "Beacon of Immortality", "Explorers of Ixalan", "E02");
  }
}

module.exports = BeaconofImmortality;
