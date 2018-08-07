"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VampiricTouch extends UnimplementedCard {
  constructor (game) {
    super(game, "Vampiric Touch", "Portal", "POR");
  }
}

module.exports = VampiricTouch;
