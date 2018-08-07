"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SkilledAnimator extends UnimplementedCard {
  constructor (game) {
    super(game, "Skilled Animator", "Core Set 2019", "M19");
  }
}

module.exports = SkilledAnimator;
