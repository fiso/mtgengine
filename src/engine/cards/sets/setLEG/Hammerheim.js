"use strict";
const Constants = require ("../../../Constants");
const HammerheimBase = require("../setME3/Hammerheim");

class Hammerheim extends HammerheimBase {
  constructor (game) {
    super(game, "Hammerheim", "Legends", "LEG");
  }
}

module.exports = Hammerheim;
