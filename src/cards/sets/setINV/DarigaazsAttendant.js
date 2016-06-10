"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DarigaazsAttendant extends UnimplementedCard {
  constructor (game) {
    super(game, "Darigaaz's Attendant", "Invasion", "INV");
  }
}

module.exports = DarigaazsAttendant;
