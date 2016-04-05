"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HazyHomunculus extends UnimplementedCard {
  constructor(game) {
    super(game, "Hazy Homunculus", "Prophecy", "PCY");
  }
}

module.exports = HazyHomunculus;
