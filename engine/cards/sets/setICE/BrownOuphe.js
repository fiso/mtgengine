"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BrownOuphe extends UnimplementedCard {
  constructor(game) {
    super(game, "Brown Ouphe", "Ice Age", "ICE");
  }
}

module.exports = BrownOuphe;
