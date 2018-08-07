"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DauntlessAven extends UnimplementedCard {
  constructor (game) {
    super(game, "Dauntless Aven", "Hour of Devastation", "HOU");
  }
}

module.exports = DauntlessAven;
