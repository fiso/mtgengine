"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Fugue extends UnimplementedCard {
  constructor (game) {
    super(game, "Fugue", "Tempest Remastered", "TPR");
  }
}

module.exports = Fugue;
