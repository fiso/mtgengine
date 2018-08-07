"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class UnquenchableThirst extends UnimplementedCard {
  constructor (game) {
    super(game, "Unquenchable Thirst", "Hour of Devastation", "HOU");
  }
}

module.exports = UnquenchableThirst;
