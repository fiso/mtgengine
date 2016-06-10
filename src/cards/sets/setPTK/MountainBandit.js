"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MountainBandit extends UnimplementedCard {
  constructor (game) {
    super(game, "Mountain Bandit", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = MountainBandit;
