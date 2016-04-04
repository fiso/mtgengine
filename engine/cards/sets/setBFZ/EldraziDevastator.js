"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EldraziDevastator extends UnimplementedCard {
  constructor(game) {
    super(game, "Eldrazi Devastator", "Battle for Zendikar", "BFZ");
  }
}

module.exports = EldraziDevastator;
