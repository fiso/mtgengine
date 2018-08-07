"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ToiltoRenown extends UnimplementedCard {
  constructor (game) {
    super(game, "Toil to Renown", "Shadowmoor", "SHM");
  }
}

module.exports = ToiltoRenown;
