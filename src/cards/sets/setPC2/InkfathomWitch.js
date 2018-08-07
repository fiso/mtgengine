"use strict";
const Constants = require ("../../../Constants");
const InkfathomWitchBase = require("../setPCA/InkfathomWitch");

class InkfathomWitch extends InkfathomWitchBase {
  constructor (game) {
    super(game, "Inkfathom Witch", "Planechase 2012", "PC2");
  }
}

module.exports = InkfathomWitch;
