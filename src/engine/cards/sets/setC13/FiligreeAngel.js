"use strict";
const Constants = require ("../../../Constants");
const FiligreeAngelBase = require("../setC16/FiligreeAngel");

class FiligreeAngel extends FiligreeAngelBase {
  constructor (game) {
    super(game, "Filigree Angel", "Commander 2013", "C13");
  }
}

module.exports = FiligreeAngel;
