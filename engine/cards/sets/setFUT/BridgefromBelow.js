"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BridgefromBelow extends UnimplementedCard {
  constructor(game) {
    super(game, "Bridge from Below", "Future Sight", "FUT");
  }
}

module.exports = BridgefromBelow;
