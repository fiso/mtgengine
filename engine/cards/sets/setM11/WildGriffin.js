"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WildGriffin extends UnimplementedCard {
  constructor(game) {
    super(game, "Wild Griffin", "Magic 2011", "M11");
  }
}

module.exports = WildGriffin;
