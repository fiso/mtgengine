"use strict";
const Constants = require ("../../../Constants");
const EldraziMonumentBase = require("../setCMA/EldraziMonument");

class EldraziMonument extends EldraziMonumentBase {
  constructor (game) {
    super(game, "Eldrazi Monument", "Commander 2015", "C15");
  }
}

module.exports = EldraziMonument;
