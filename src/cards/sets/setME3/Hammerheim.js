"use strict";
const Constants = require ("../../../Constants");
const HammerheimBase = require("../setLEG/Hammerheim");

class Hammerheim extends HammerheimBase {
  constructor (game) {
    super(game, "Hammerheim", "Masters Edition III", "ME3");
  }
}

module.exports = Hammerheim;
