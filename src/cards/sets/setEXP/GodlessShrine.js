"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GodlessShrine extends UnimplementedCard {
  constructor (game) {
    super(game, "Godless Shrine", "Zendikar Expeditions", "EXP");
  }
}

module.exports = GodlessShrine;
