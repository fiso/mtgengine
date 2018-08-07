"use strict";
const Constants = require ("../../../Constants");
const FireblastBase = require("../setJVC/Fireblast");

class Fireblast extends FireblastBase {
  constructor (game) {
    super(game, "Fireblast", "Magic Online Promos", "PRM");
  }
}

module.exports = Fireblast;
