"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CinderBarrens extends UnimplementedCard {
  constructor(game) {
    super(game, "Cinder Barrens", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = CinderBarrens;
