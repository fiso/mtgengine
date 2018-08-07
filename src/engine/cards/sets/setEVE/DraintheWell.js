"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DraintheWell extends UnimplementedCard {
  constructor (game) {
    super(game, "Drain the Well", "Eventide", "EVE");
  }
}

module.exports = DraintheWell;
