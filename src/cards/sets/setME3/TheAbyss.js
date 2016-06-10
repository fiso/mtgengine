"use strict";
const Constants = require ("../../../Constants");
const TheAbyssBase = require("../setLEG/TheAbyss");

class TheAbyss extends TheAbyssBase {
  constructor (game) {
    super(game, "The Abyss", "Masters Edition III", "ME3");
  }
}

module.exports = TheAbyss;
