"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EmptyCityRuse extends UnimplementedCard {
  constructor (game) {
    super(game, "Empty City Ruse", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = EmptyCityRuse;
