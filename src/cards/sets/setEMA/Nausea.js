"use strict";
const Constants = require ("../../../Constants");
const NauseaBase = require("../set8ED/Nausea");

class Nausea extends NauseaBase {
  constructor (game) {
    super(game, "Nausea", "Eternal Masters", "EMA");
  }
}

module.exports = Nausea;
