"use strict";
const Constants = require ("../../../Constants");
const BlazeBase = require("../set6ED/Blaze");

class Blaze extends BlazeBase {
  constructor(game) {
    super(game, "Blaze", "Planechase", "HOP");
  }
}

module.exports = Blaze;
