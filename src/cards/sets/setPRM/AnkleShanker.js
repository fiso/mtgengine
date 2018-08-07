"use strict";
const Constants = require ("../../../Constants");
const AnkleShankerBase = require("../setC16/AnkleShanker");

class AnkleShanker extends AnkleShankerBase {
  constructor (game) {
    super(game, "Ankle Shanker", "Magic Online Promos", "PRM");
  }
}

module.exports = AnkleShanker;
