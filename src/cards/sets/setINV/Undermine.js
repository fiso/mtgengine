"use strict";
const Constants = require ("../../../Constants");
const UndermineBase = require("../setDDH/Undermine");

class Undermine extends UndermineBase {
  constructor(game) {
    super(game, "Undermine", "Invasion", "INV");
  }
}

module.exports = Undermine;
