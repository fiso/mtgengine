"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RithsAttendant extends UnimplementedCard {
  constructor (game) {
    super(game, "Rith's Attendant", "Invasion", "INV");
  }
}

module.exports = RithsAttendant;
