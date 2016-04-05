"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RhysticStudy extends UnimplementedCard {
  constructor(game) {
    super(game, "Rhystic Study", "Commander's Arsenal", "CM1");
  }
}

module.exports = RhysticStudy;
