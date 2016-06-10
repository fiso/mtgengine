"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CleansingBeam extends UnimplementedCard {
  constructor (game) {
    super(game, "Cleansing Beam", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = CleansingBeam;
