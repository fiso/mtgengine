"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TurnAside extends UnimplementedCard {
  constructor (game) {
    super(game, "Turn Aside", "Eldritch Moon", "EMN");
  }
}

module.exports = TurnAside;
