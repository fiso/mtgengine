"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThopterSpyNetwork extends UnimplementedCard {
  constructor (game) {
    super(game, "Thopter Spy Network", "Magic Origins", "ORI");
  }
}

module.exports = ThopterSpyNetwork;
