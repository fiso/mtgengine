"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JestersSombrero extends UnimplementedCard {
  constructor(game) {
    super(game, "Jester's Sombrero", "Unglued", "UGL");
  }
}

module.exports = JestersSombrero;
