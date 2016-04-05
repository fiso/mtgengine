"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MartyrsCause extends UnimplementedCard {
  constructor(game) {
    super(game, "Martyr's Cause", "Urza's Legacy", "ULG");
  }
}

module.exports = MartyrsCause;
