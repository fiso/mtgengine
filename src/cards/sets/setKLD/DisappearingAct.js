"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DisappearingAct extends UnimplementedCard {
  constructor (game) {
    super(game, "Disappearing Act", "Kaladesh", "KLD");
  }
}

module.exports = DisappearingAct;
