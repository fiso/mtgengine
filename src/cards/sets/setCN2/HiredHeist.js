"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HiredHeist extends UnimplementedCard {
  constructor (game) {
    super(game, "Hired Heist", "Conspiracy: Take the Crown", "CN2");
  }
}

module.exports = HiredHeist;
