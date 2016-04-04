"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KothsCourier extends UnimplementedCard {
  constructor(game) {
    super(game, "Koth's Courier", "Mirrodin Besieged", "MBS");
  }
}

module.exports = KothsCourier;
