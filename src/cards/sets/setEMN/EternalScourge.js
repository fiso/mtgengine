"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EternalScourge extends UnimplementedCard {
  constructor (game) {
    super(game, "Eternal Scourge", "Eldritch Moon", "EMN");
  }
}

module.exports = EternalScourge;
