"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Hellfire extends UnimplementedCard {
  constructor (game) {
    super(game, "Hellfire", "Legends", "LEG");
  }
}

module.exports = Hellfire;
