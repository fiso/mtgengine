"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RingofRenewal extends UnimplementedCard {
  constructor (game) {
    super(game, "Ring of Renewal", "Masters Edition IV", "ME4");
  }
}

module.exports = RingofRenewal;
