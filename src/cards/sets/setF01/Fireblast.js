"use strict";
const Constants = require ("../../../Constants");
const FireblastBase = require("../setJVC/Fireblast");

class Fireblast extends FireblastBase {
  constructor (game) {
    super(game, "Fireblast", "Friday Night Magic 2001", "F01");
  }
}

module.exports = Fireblast;
