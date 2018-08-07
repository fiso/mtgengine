"use strict";
const Constants = require ("../../../Constants");
const PalinchronBase = require("../setVMA/Palinchron");

class Palinchron extends PalinchronBase {
  constructor (game) {
    super(game, "Palinchron", "Urza's Legacy", "ULG");
  }
}

module.exports = Palinchron;
