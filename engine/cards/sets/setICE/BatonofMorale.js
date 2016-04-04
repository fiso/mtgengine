"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BatonofMorale extends UnimplementedCard {
  constructor(game) {
    super(game, "Baton of Morale", "Ice Age", "ICE");
  }
}

module.exports = BatonofMorale;
