"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CruelRevival extends UnimplementedCard {
  constructor(game) {
    super(game, "Cruel Revival", "Magic Origins", "ORI");
  }
}

module.exports = CruelRevival;
