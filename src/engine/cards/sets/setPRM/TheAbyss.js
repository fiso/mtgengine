"use strict";
const Constants = require ("../../../Constants");
const TheAbyssBase = require("../setME3/TheAbyss");

class TheAbyss extends TheAbyssBase {
  constructor (game) {
    super(game, "The Abyss", "Magic Online Promos", "PRM");
  }
}

module.exports = TheAbyss;
