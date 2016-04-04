"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CinderPyromancerBase = require("../setDPA/CinderPyromancer.js");

class CinderPyromancer extends CinderPyromancerBase {
  constructor(game) {
    super(game, "Cinder Pyromancer", "Eventide", "EVE");
  }
}

module.exports = CinderPyromancer;
