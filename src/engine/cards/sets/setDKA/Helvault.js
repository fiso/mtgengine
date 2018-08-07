"use strict";
const Constants = require ("../../../Constants");
const HelvaultBase = require("../setV16/Helvault");

class Helvault extends HelvaultBase {
  constructor (game) {
    super(game, "Helvault", "Dark Ascension", "DKA");
  }
}

module.exports = Helvault;
