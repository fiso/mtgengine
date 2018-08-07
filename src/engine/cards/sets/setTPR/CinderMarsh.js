"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CinderMarsh extends UnimplementedCard {
  constructor (game) {
    super(game, "Cinder Marsh", "Tempest Remastered", "TPR");
  }
}

module.exports = CinderMarsh;
