"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Backdraft extends UnimplementedCard {
  constructor(game) {
    super(game, "Backdraft", "Legends", "LEG");
  }
}

module.exports = Backdraft;
