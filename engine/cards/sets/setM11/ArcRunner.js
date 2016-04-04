"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ArcRunner extends UnimplementedCard {
  constructor(game) {
    super(game, "Arc Runner", "Magic 2011", "M11");
  }
}

module.exports = ArcRunner;
