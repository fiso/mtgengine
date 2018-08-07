"use strict";
const Constants = require ("../../../Constants");
const SaprolingBase = require("../setTCM2/Saproling");

class Saproling extends SaprolingBase {
  constructor (game) {
    super(game, "Saproling", "Commander 2015 Tokens", "TC15");
  }
}

module.exports = Saproling;
