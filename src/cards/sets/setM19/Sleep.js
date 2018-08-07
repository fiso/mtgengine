"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Sleep extends UnimplementedCard {
  constructor (game) {
    super(game, "Sleep", "Core Set 2019", "M19");
  }
}

module.exports = Sleep;
