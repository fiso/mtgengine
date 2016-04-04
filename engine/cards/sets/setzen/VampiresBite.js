"use strict";
const Constants = require ("../../../Constants");
const VampiresBiteBase = require("../setDDK/VampiresBite");

class VampiresBite extends VampiresBiteBase {
  constructor(game) {
    super(game, "Vampire's Bite", "Zendikar", "ZEN");
  }
}

module.exports = VampiresBite;
