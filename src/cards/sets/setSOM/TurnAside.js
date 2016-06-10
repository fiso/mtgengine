"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TurnAside extends UnimplementedCard {
  constructor (game) {
    super(game, "Turn Aside", "Scars of Mirrodin", "SOM");
  }
}

module.exports = TurnAside;
