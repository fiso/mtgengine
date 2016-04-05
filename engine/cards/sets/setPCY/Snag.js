"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Snag extends UnimplementedCard {
  constructor(game) {
    super(game, "Snag", "Prophecy", "PCY");
  }
}

module.exports = Snag;
