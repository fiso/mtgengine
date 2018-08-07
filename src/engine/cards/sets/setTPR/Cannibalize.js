"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Cannibalize extends UnimplementedCard {
  constructor (game) {
    super(game, "Cannibalize", "Tempest Remastered", "TPR");
  }
}

module.exports = Cannibalize;
