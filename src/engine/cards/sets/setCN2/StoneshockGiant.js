"use strict";
const Constants = require ("../../../Constants");
const StoneshockGiantBase = require("../setCM2/StoneshockGiant");

class StoneshockGiant extends StoneshockGiantBase {
  constructor (game) {
    super(game, "Stoneshock Giant", "Conspiracy: Take the Crown", "CN2");
  }
}

module.exports = StoneshockGiant;
