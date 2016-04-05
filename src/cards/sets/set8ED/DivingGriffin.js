"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DivingGriffin extends UnimplementedCard {
  constructor(game) {
    super(game, "Diving Griffin", "Eighth Edition", "8ED");
  }
}

module.exports = DivingGriffin;
