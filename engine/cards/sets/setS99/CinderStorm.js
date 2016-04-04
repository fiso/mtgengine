"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CinderStormBase = require("../setME3/CinderStorm.js");

class CinderStorm extends CinderStormBase {
  constructor(game) {
    super(game, "Cinder Storm", "Starter 1999", "S99");
  }
}

module.exports = CinderStorm;
