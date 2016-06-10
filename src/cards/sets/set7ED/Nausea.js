"use strict";
const Constants = require ("../../../Constants");
const NauseaBase = require("../set8ED/Nausea");

class Nausea extends NauseaBase {
  constructor (game) {
    super(game, "Nausea", "Seventh Edition", "7ED");
  }
}

module.exports = Nausea;
