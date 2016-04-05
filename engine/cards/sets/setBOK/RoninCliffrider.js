"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RoninCliffrider extends UnimplementedCard {
  constructor(game) {
    super(game, "Ronin Cliffrider", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = RoninCliffrider;
