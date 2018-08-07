"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DrakeHaven extends UnimplementedCard {
  constructor (game) {
    super(game, "Drake Haven", "Amonkhet", "AKH");
  }
}

module.exports = DrakeHaven;
