"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DeepwoodGhoul extends UnimplementedCard {
  constructor(game) {
    super(game, "Deepwood Ghoul", "Eighth Edition", "8ED");
  }
}

module.exports = DeepwoodGhoul;
