"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RagingMinotaurBase = require("../setME3/RagingMinotaur.js");

class RagingMinotaur extends RagingMinotaurBase {
  constructor(game) {
    super(game, "Raging Minotaur", "Portal", "POR");
  }
}

module.exports = RagingMinotaur;
