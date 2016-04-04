"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DivineReckoning extends UnimplementedCard {
  constructor(game) {
    super(game, "Divine Reckoning", "Innistrad", "ISD");
  }
}

module.exports = DivineReckoning;
