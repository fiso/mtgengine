"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SacredWolf extends UnimplementedCard {
  constructor (game) {
    super(game, "Sacred Wolf", "Magic 2012", "M12");
  }
}

module.exports = SacredWolf;
