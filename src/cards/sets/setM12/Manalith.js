"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Manalith extends UnimplementedCard {
  constructor (game) {
    super(game, "Manalith", "Magic 2012", "M12");
  }
}

module.exports = Manalith;
