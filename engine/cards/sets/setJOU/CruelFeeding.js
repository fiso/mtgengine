"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CruelFeeding extends UnimplementedCard {
  constructor(game) {
    super(game, "Cruel Feeding", "Journey into Nyx", "JOU");
  }
}

module.exports = CruelFeeding;
