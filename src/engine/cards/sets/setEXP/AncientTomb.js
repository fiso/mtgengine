"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AncientTomb extends UnimplementedCard {
  constructor (game) {
    super(game, "Ancient Tomb", "Zendikar Expeditions", "EXP");
  }
}

module.exports = AncientTomb;
