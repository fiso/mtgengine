"use strict";
const Constants = require ("../../../Constants");
const PhantasmalFiendBase = require("../setME2/PhantasmalFiend");

class PhantasmalFiend extends PhantasmalFiendBase {
  constructor (game) {
    super(game, "Phantasmal Fiend", "Alliances", "ALL");
  }
}

module.exports = PhantasmalFiend;
