"use strict";
const Constants = require ("../../../Constants");
const AlurenBase = require("../setTPR/Aluren");

class Aluren extends AlurenBase {
  constructor (game) {
    super(game, "Aluren", "Tempest", "TMP");
  }
}

module.exports = Aluren;
