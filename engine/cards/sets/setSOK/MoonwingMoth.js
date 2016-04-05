"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MoonwingMoth extends UnimplementedCard {
  constructor(game) {
    super(game, "Moonwing Moth", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = MoonwingMoth;
