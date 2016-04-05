"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DakraMystic extends UnimplementedCard {
  constructor(game) {
    super(game, "Dakra Mystic", "Journey into Nyx", "JOU");
  }
}

module.exports = DakraMystic;
