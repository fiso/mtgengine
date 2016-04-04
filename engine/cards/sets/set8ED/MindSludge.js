"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MindSludge extends UnimplementedCard {
  constructor(game) {
    super(game, "Mind Sludge", "Eighth Edition", "8ED");
  }
}

module.exports = MindSludge;
