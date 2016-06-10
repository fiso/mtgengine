"use strict";
const Constants = require ("../../../Constants");
const AurochsBase = require("../setCST/Aurochs");

class Aurochs extends AurochsBase {
  constructor (game) {
    super(game, "Aurochs", "Fifth Edition", "5ED");
  }
}

module.exports = Aurochs;
