"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MalakirSoothsayer extends UnimplementedCard {
  constructor (game) {
    super(game, "Malakir Soothsayer", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = MalakirSoothsayer;
