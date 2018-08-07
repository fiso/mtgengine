"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CrosissAttendant extends UnimplementedCard {
  constructor (game) {
    super(game, "Crosis's Attendant", "Invasion", "INV");
  }
}

module.exports = CrosissAttendant;
