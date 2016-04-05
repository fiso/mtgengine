"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MinionsMurmurs extends UnimplementedCard {
  constructor(game) {
    super(game, "Minions' Murmurs", "Future Sight", "FUT");
  }
}

module.exports = MinionsMurmurs;
