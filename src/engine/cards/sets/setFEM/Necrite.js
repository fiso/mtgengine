"use strict";
const Constants = require ("../../../Constants");
const NecriteBase = require("../setME2/Necrite");

class Necrite extends NecriteBase {
  constructor (game) {
    super(game, "Necrite", "Fallen Empires", "FEM");
  }
}

module.exports = Necrite;
