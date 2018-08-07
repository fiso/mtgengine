"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Carnophage extends UnimplementedCard {
  constructor (game) {
    super(game, "Carnophage", "Tempest Remastered", "TPR");
  }
}

module.exports = Carnophage;
