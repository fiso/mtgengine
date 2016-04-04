"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IreofKaminari extends UnimplementedCard {
  constructor(game) {
    super(game, "Ire of Kaminari", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = IreofKaminari;
