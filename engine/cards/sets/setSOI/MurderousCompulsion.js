"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MurderousCompulsion extends UnimplementedCard {
  constructor(game) {
    super(game, "Murderous Compulsion", "Shadows over Innistrad", "SOI");
  }
}

module.exports = MurderousCompulsion;
