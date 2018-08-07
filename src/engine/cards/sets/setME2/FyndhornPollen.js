"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FyndhornPollen extends UnimplementedCard {
  constructor (game) {
    super(game, "Fyndhorn Pollen", "Masters Edition II", "ME2");
  }
}

module.exports = FyndhornPollen;
