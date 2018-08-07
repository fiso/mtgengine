"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Magmasaur extends UnimplementedCard {
  constructor (game) {
    super(game, "Magmasaur", "Tempest Remastered", "TPR");
  }
}

module.exports = Magmasaur;
