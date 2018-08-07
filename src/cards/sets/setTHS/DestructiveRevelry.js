"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DestructiveRevelry extends UnimplementedCard {
  constructor (game) {
    super(game, "Destructive Revelry", "Theros", "THS");
  }
}

module.exports = DestructiveRevelry;
