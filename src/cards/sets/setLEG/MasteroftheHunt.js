"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MasteroftheHunt extends UnimplementedCard {
  constructor (game) {
    super(game, "Master of the Hunt", "Legends", "LEG");
  }
}

module.exports = MasteroftheHunt;
