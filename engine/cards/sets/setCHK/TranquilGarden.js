"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TranquilGarden extends UnimplementedCard {
  constructor(game) {
    super(game, "Tranquil Garden", "Champions of Kamigawa", "CHK");
  }
}

module.exports = TranquilGarden;
