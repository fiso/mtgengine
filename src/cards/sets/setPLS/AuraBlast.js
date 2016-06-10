"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AuraBlast extends UnimplementedCard {
  constructor (game) {
    super(game, "Aura Blast", "Planeshift", "PLS");
  }
}

module.exports = AuraBlast;
