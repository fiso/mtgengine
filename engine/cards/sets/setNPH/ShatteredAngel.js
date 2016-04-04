"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ShatteredAngelBase = require("../setCMD/ShatteredAngel.js");

class ShatteredAngel extends ShatteredAngelBase {
  constructor(game) {
    super(game, "Shattered Angel", "New Phyrexia", "NPH");
  }
}

module.exports = ShatteredAngel;
