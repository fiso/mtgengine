"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GnatAlleyCreeper extends UnimplementedCard {
  constructor (game) {
    super(game, "Gnat Alley Creeper", "Dissension", "DIS");
  }
}

module.exports = GnatAlleyCreeper;
