"use strict";
const Constants = require ("../../../Constants");
const CinderStormBase = require("../setA25/CinderStorm");

class CinderStorm extends CinderStormBase {
  constructor (game) {
    super(game, "Cinder Storm", "Masters Edition III", "ME3");
  }
}

module.exports = CinderStorm;
