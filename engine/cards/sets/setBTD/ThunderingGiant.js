"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThunderingGiant extends UnimplementedCard {
  constructor(game) {
    super(game, "Thundering Giant", "Beatdown Box Set", "BTD");
  }
}

module.exports = ThunderingGiant;
