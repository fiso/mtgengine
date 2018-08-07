"use strict";
const Constants = require ("../../../Constants");
const AnkleShankerBase = require("../setC16/AnkleShanker");

class AnkleShanker extends AnkleShankerBase {
  constructor (game) {
    super(game, "Ankle Shanker", "Khans of Tarkir", "KTK");
  }
}

module.exports = AnkleShanker;
