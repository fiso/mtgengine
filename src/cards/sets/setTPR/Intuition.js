"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Intuition extends UnimplementedCard {
  constructor (game) {
    super(game, "Intuition", "Tempest Remastered", "TPR");
  }
}

module.exports = Intuition;
