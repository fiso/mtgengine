"use strict";
const Constants = require ("../../../Constants");
const StonecloakerBase = require("../setCMA/Stonecloaker");

class Stonecloaker extends StonecloakerBase {
  constructor (game) {
    super(game, "Stonecloaker", "Commander 2013", "C13");
  }
}

module.exports = Stonecloaker;
