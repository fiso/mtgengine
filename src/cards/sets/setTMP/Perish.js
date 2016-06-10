"use strict";
const Constants = require ("../../../Constants");
const PerishBase = require("../set6ED/Perish");

class Perish extends PerishBase {
  constructor (game) {
    super(game, "Perish", "Tempest", "TMP");
  }
}

module.exports = Perish;
