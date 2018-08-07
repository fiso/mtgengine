"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AssaultBattery extends UnimplementedCard {
  constructor (game) {
    super(game, "Assault // Battery", "Planechase", "HOP");
  }
}

module.exports = AssaultBattery;
