"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KoboldDrillSergeant extends UnimplementedCard {
  constructor (game) {
    super(game, "Kobold Drill Sergeant", "Masters Edition III", "ME3");
  }
}

module.exports = KoboldDrillSergeant;
