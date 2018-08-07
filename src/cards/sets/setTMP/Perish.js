"use strict";
const Constants = require ("../../../Constants");
const PerishBase = require("../setWC99/Perish");

class Perish extends PerishBase {
  constructor (game) {
    super(game, "Perish", "Tempest", "TMP");
  }
}

module.exports = Perish;
