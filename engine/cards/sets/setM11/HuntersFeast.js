"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HuntersFeast extends UnimplementedCard {
  constructor(game) {
    super(game, "Hunters' Feast", "Magic 2011", "M11");
  }
}

module.exports = HuntersFeast;
