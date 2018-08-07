"use strict";
const Constants = require ("../../../Constants");
const DerangedHermitBase = require("../setVMA/DerangedHermit");

class DerangedHermit extends DerangedHermitBase {
  constructor (game) {
    super(game, "Deranged Hermit", "Judge Gift Cards 2004", "G04");
  }
}

module.exports = DerangedHermit;
