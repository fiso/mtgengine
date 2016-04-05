"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ScourgeWolf extends UnimplementedCard {
  constructor(game) {
    super(game, "Scourge Wolf", "Shadows over Innistrad", "SOI");
  }
}

module.exports = ScourgeWolf;
