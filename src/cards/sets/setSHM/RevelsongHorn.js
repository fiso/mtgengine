"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RevelsongHorn extends UnimplementedCard {
  constructor(game) {
    super(game, "Revelsong Horn", "Shadowmoor", "SHM");
  }
}

module.exports = RevelsongHorn;
