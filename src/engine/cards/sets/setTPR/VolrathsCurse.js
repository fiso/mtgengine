"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VolrathsCurse extends UnimplementedCard {
  constructor (game) {
    super(game, "Volrath's Curse", "Tempest Remastered", "TPR");
  }
}

module.exports = VolrathsCurse;
