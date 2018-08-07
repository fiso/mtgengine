"use strict";
const Constants = require ("../../../Constants");
const ManakinBase = require("../setIMA/Manakin");

class Manakin extends ManakinBase {
  constructor (game) {
    super(game, "Manakin", "Tempest", "TMP");
  }
}

module.exports = Manakin;
