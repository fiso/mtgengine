"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BullHippo extends UnimplementedCard {
  constructor(game) {
    super(game, "Bull Hippo", "Portal", "POR");
  }
}

module.exports = BullHippo;
