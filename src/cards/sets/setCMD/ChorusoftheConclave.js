"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ChorusoftheConclave extends UnimplementedCard {
  constructor (game) {
    super(game, "Chorus of the Conclave", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = ChorusoftheConclave;
