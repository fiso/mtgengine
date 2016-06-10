"use strict";
const Constants = require ("../../../Constants");
const AftershockBase = require("../setTMP/Aftershock");

class Aftershock extends AftershockBase {
  constructor (game) {
    super(game, "Aftershock", "Vintage Masters", "VMA");
  }
}

module.exports = Aftershock;
