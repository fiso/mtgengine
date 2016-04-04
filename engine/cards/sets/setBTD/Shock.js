"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Shock extends UnimplementedCard {
  constructor(game) {
    super(game, "Shock", "Beatdown Box Set", "BTD");
  }
}

module.exports = Shock;
