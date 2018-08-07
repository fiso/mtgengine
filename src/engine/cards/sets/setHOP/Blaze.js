"use strict";
const Constants = require ("../../../Constants");
const BlazeBase = require("../setBBD/Blaze");

class Blaze extends BlazeBase {
  constructor (game) {
    super(game, "Blaze", "Planechase", "HOP");
  }
}

module.exports = Blaze;
