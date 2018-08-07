"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Necrobite extends UnimplementedCard {
  constructor (game) {
    super(game, "Necrobite", "Magic 2015", "M15");
  }
}

module.exports = Necrobite;
