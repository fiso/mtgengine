"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EnduringRenewal extends UnimplementedCard {
  constructor(game) {
    super(game, "Enduring Renewal", "Ice Age", "ICE");
  }
}

module.exports = EnduringRenewal;
