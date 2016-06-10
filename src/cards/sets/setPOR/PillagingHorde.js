"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PillagingHorde extends UnimplementedCard {
  constructor (game) {
    super(game, "Pillaging Horde", "Portal", "POR");
  }
}

module.exports = PillagingHorde;
