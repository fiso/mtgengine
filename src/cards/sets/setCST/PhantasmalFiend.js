"use strict";
const Constants = require ("../../../Constants");
const PhantasmalFiendBase = require("../setALL/PhantasmalFiend");

class PhantasmalFiend extends PhantasmalFiendBase {
  constructor (game) {
    super(game, "Phantasmal Fiend", "Coldsnap Theme Decks", "CST");
  }
}

module.exports = PhantasmalFiend;
