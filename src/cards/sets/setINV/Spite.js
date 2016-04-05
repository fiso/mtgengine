"use strict";
const Constants = require ("../../../Constants");
const SpiteBase = require("../setDDH/Spite");

class Spite extends SpiteBase {
  constructor(game) {
    super(game, "Spite", "Invasion", "INV");
  }
}

module.exports = Spite;
