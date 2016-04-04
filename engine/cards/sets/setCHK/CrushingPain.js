"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CrushingPain extends UnimplementedCard {
  constructor(game) {
    super(game, "Crushing Pain", "Champions of Kamigawa", "CHK");
  }
}

module.exports = CrushingPain;
