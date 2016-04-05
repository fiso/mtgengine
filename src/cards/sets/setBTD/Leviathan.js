"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Leviathan extends UnimplementedCard {
  constructor(game) {
    super(game, "Leviathan", "Beatdown Box Set", "BTD");
  }
}

module.exports = Leviathan;
