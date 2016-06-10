"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DromarsAttendant extends UnimplementedCard {
  constructor (game) {
    super(game, "Dromar's Attendant", "Invasion", "INV");
  }
}

module.exports = DromarsAttendant;
