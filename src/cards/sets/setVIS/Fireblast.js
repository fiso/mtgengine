"use strict";
const Constants = require ("../../../Constants");
const FireblastBase = require("../setJVC/Fireblast");

class Fireblast extends FireblastBase {
  constructor (game) {
    super(game, "Fireblast", "Visions", "VIS");
  }
}

module.exports = Fireblast;
