"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const VampiresBiteBase = require("../setDDK/VampiresBite.js");

class VampiresBite extends VampiresBiteBase {
  constructor(game) {
    super(game, "Vampire's Bite", "Zendikar", "ZEN");
  }
}

module.exports = VampiresBite;
