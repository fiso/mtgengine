"use strict";
const Constants = require ("../../../Constants");
const DerangedHermitBase = require("../setVMA/DerangedHermit");

class DerangedHermit extends DerangedHermitBase {
  constructor (game) {
    super(game, "Deranged Hermit", "Urza's Legacy", "ULG");
  }
}

module.exports = DerangedHermit;
