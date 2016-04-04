"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MarshFlatsBase = require("../setZEN/MarshFlats.js");

class MarshFlats extends MarshFlatsBase {
  constructor(game) {
    super(game, "Marsh Flats", "Zendikar Expedition", "EXP");
  }
}

module.exports = MarshFlats;
