"use strict";
const Constants = require ("../../../Constants");
const AvenSquireBase = require("../setCON/AvenSquire");

class AvenSquire extends AvenSquireBase {
  constructor(game) {
    super(game, "Aven Squire", "Magic 2013", "M13");
  }
}

module.exports = AvenSquire;
