"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ShuGeneral extends UnimplementedCard {
  constructor (game) {
    super(game, "Shu General", "Masters Edition III", "ME3");
  }
}

module.exports = ShuGeneral;
