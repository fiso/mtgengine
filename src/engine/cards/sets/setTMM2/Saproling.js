"use strict";
const Constants = require ("../../../Constants");
const SaprolingBase = require("../setTCM2/Saproling");

class Saproling extends SaprolingBase {
  constructor (game) {
    super(game, "Saproling", "Modern Masters 2015 Tokens", "TMM2");
  }
}

module.exports = Saproling;
