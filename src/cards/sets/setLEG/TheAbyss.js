"use strict";
const Constants = require ("../../../Constants");
const TheAbyssBase = require("../setME3/TheAbyss");

class TheAbyss extends TheAbyssBase {
  constructor (game) {
    super(game, "The Abyss", "Legends", "LEG");
  }
}

module.exports = TheAbyss;
