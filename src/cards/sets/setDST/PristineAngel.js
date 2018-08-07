"use strict";
const Constants = require ("../../../Constants");
const PristineAngelBase = require("../setCNS/PristineAngel");

class PristineAngel extends PristineAngelBase {
  constructor (game) {
    super(game, "Pristine Angel", "Darksteel", "DST");
  }
}

module.exports = PristineAngel;
