"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SquirrelFarm extends UnimplementedCard {
  constructor(game) {
    super(game, "Squirrel Farm", "Unglued", "UGL");
  }
}

module.exports = SquirrelFarm;
