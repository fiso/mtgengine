"use strict";
const Constants = require ("../../../Constants");
const RagingMinotaurBase = require("../setME3/RagingMinotaur");

class RagingMinotaur extends RagingMinotaurBase {
  constructor (game) {
    super(game, "Raging Minotaur", "Portal", "POR");
  }
}

module.exports = RagingMinotaur;
