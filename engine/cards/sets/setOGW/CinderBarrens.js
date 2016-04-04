"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CinderBarrens extends Card {
  constructor(game) {
    super(game, "Cinder Barrens", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = CinderBarrens;
