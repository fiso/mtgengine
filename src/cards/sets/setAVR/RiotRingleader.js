"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RiotRingleader extends UnimplementedCard {
  constructor (game) {
    super(game, "Riot Ringleader", "Avacyn Restored", "AVR");
  }
}

module.exports = RiotRingleader;
