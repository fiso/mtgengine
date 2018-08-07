"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class UnholyCitadel extends UnimplementedCard {
  constructor (game) {
    super(game, "Unholy Citadel", "Legends", "LEG");
  }
}

module.exports = UnholyCitadel;
