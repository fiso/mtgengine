"use strict";
const Constants = require ("../../../Constants");
const ShatteredAngelBase = require("../setCMA/ShatteredAngel");

class ShatteredAngel extends ShatteredAngelBase {
  constructor (game) {
    super(game, "Shattered Angel", "New Phyrexia", "NPH");
  }
}

module.exports = ShatteredAngel;
