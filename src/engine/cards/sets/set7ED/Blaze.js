"use strict";
const Constants = require ("../../../Constants");
const BlazeBase = require("../setBBD/Blaze");

class Blaze extends BlazeBase {
  constructor (game) {
    super(game, "Blaze", "Seventh Edition", "7ED");
  }
}

module.exports = Blaze;
