"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StompingGround extends UnimplementedCard {
  constructor (game) {
    super(game, "Stomping Ground", "Zendikar Expeditions", "EXP");
  }
}

module.exports = StompingGround;
