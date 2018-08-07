"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TragicSlip extends UnimplementedCard {
  constructor (game) {
    super(game, "Tragic Slip", "Eternal Masters", "EMA");
  }
}

module.exports = TragicSlip;
