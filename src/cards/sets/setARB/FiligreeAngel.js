"use strict";
const Constants = require ("../../../Constants");
const FiligreeAngelBase = require("../setC16/FiligreeAngel");

class FiligreeAngel extends FiligreeAngelBase {
  constructor (game) {
    super(game, "Filigree Angel", "Alara Reborn", "ARB");
  }
}

module.exports = FiligreeAngel;
