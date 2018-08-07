"use strict";
const Constants = require ("../../../Constants");
const BlazeBase = require("../setBBD/Blaze");

class Blaze extends BlazeBase {
  constructor (game) {
    super(game, "Blaze", "Classic Sixth Edition", "6ED");
  }
}

module.exports = Blaze;
