"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AvenFlockBase = require("../set8ED/AvenFlock.js");

class AvenFlock extends AvenFlockBase {
  constructor(game) {
    super(game, "Aven Flock", "Odyssey", "ODY");
  }
}

module.exports = AvenFlock;
