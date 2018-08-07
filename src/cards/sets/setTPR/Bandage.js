"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Bandage extends UnimplementedCard {
  constructor (game) {
    super(game, "Bandage", "Tempest Remastered", "TPR");
  }
}

module.exports = Bandage;
