"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DakmorGhoul extends UnimplementedCard {
  constructor(game) {
    super(game, "Dakmor Ghoul", "Starter 1999", "S99");
  }
}

module.exports = DakmorGhoul;
