"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Meditate extends UnimplementedCard {
  constructor (game) {
    super(game, "Meditate", "Tempest Remastered", "TPR");
  }
}

module.exports = Meditate;
