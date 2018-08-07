"use strict";
const Constants = require ("../../../Constants");
const HighlandGameBase = require("../setM19/HighlandGame");

class HighlandGame extends HighlandGameBase {
  constructor (game) {
    super(game, "Highland Game", "Khans of Tarkir", "KTK");
  }
}

module.exports = HighlandGame;
