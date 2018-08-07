"use strict";
const Constants = require ("../../../Constants");
const OvertakerBase = require("../setPRM/Overtaker");

class Overtaker extends OvertakerBase {
  constructor (game) {
    super(game, "Overtaker", "Mercadian Masques", "MMQ");
  }
}

module.exports = Overtaker;
