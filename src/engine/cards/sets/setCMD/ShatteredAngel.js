"use strict";
const Constants = require ("../../../Constants");
const ShatteredAngelBase = require("../setCMA/ShatteredAngel");

class ShatteredAngel extends ShatteredAngelBase {
  constructor (game) {
    super(game, "Shattered Angel", "Commander 2011", "CMD");
  }
}

module.exports = ShatteredAngel;
