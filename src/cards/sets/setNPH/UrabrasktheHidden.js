"use strict";
const Constants = require ("../../../Constants");
const UrabrasktheHiddenBase = require("../setIMA/UrabrasktheHidden");

class UrabrasktheHidden extends UrabrasktheHiddenBase {
  constructor (game) {
    super(game, "Urabrask the Hidden", "New Phyrexia", "NPH");
  }
}

module.exports = UrabrasktheHidden;
