"use strict";
const Constants = require ("../../../Constants");
const AddleBase = require("../setINV/Addle");

class Addle extends AddleBase {
  constructor (game) {
    super(game, "Addle", "Vintage Masters", "VMA");
  }
}

module.exports = Addle;
