"use strict";
const Constants = require ("../../../Constants");
const NissasRevelationBase = require("../setPORI/NissasRevelation");

class NissasRevelation extends NissasRevelationBase {
  constructor (game) {
    super(game, "Nissa's Revelation", "Magic Origins", "ORI");
  }
}

module.exports = NissasRevelation;
