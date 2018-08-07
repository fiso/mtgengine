"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WanderingEye extends UnimplementedCard {
  constructor (game) {
    super(game, "Wandering Eye", "Nemesis", "NEM");
  }
}

module.exports = WanderingEye;
