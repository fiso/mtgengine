"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NettlingCurse extends UnimplementedCard {
  constructor(game) {
    super(game, "Nettling Curse", "Dissension", "DIS");
  }
}

module.exports = NettlingCurse;
