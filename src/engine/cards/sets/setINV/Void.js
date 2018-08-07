"use strict";
const Constants = require ("../../../Constants");
const VoidBase = require("../setEMA/Void");

class Void extends VoidBase {
  constructor (game) {
    super(game, "Void", "Invasion", "INV");
  }
}

module.exports = Void;
