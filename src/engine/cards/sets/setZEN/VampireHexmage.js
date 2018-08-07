"use strict";
const Constants = require ("../../../Constants");
const VampireHexmageBase = require("../setC14/VampireHexmage");

class VampireHexmage extends VampireHexmageBase {
  constructor (game) {
    super(game, "Vampire Hexmage", "Zendikar", "ZEN");
  }
}

module.exports = VampireHexmage;
