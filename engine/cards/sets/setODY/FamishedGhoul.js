"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FamishedGhoul extends UnimplementedCard {
  constructor(game) {
    super(game, "Famished Ghoul", "Odyssey", "ODY");
  }
}

module.exports = FamishedGhoul;
