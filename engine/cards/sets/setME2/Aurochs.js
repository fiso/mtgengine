"use strict";
const Constants = require ("../../../Constants");
const AurochsBase = require("../setCST/Aurochs");

class Aurochs extends AurochsBase {
  constructor(game) {
    super(game, "Aurochs", "Masters Edition II", "ME2");
  }
}

module.exports = Aurochs;
