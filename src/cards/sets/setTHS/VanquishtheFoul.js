"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VanquishtheFoul extends UnimplementedCard {
  constructor(game) {
    super(game, "Vanquish the Foul", "Theros", "THS");
  }
}

module.exports = VanquishtheFoul;
