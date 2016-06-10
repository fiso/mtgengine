"use strict";
const Constants = require ("../../../Constants");
const DerangedHermitBase = require("../setpJGP/DerangedHermit");

class DerangedHermit extends DerangedHermitBase {
  constructor (game) {
    super(game, "Deranged Hermit", "Vintage Masters", "VMA");
  }
}

module.exports = DerangedHermit;
