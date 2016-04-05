"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KilnWalker extends UnimplementedCard {
  constructor(game) {
    super(game, "Kiln Walker", "New Phyrexia", "NPH");
  }
}

module.exports = KilnWalker;
