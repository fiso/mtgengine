"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Gallantry extends UnimplementedCard {
  constructor (game) {
    super(game, "Gallantry", "Tempest Remastered", "TPR");
  }
}

module.exports = Gallantry;
