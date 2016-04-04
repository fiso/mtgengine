"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AkkiUnderling extends UnimplementedCard {
  constructor(game) {
    super(game, "Akki Underling", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = AkkiUnderling;
