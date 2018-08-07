"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WingedShepherd extends UnimplementedCard {
  constructor (game) {
    super(game, "Winged Shepherd", "Amonkhet", "AKH");
  }
}

module.exports = WingedShepherd;
