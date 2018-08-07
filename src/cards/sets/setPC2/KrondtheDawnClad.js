"use strict";
const Constants = require ("../../../Constants");
const KrondtheDawnCladBase = require("../setPCA/KrondtheDawnClad");

class KrondtheDawnClad extends KrondtheDawnCladBase {
  constructor (game) {
    super(game, "Krond the Dawn-Clad", "Planechase 2012", "PC2");
  }
}

module.exports = KrondtheDawnClad;
