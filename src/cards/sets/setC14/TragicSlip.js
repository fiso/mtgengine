"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TragicSlip extends UnimplementedCard {
  constructor(game) {
    super(game, "Tragic Slip", "Commander 2014", "C14");
  }
}

module.exports = TragicSlip;
