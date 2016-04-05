"use strict";
const Constants = require ("../../../Constants");
const EldraziMonumentBase = require("../setC15/EldraziMonument");

class EldraziMonument extends EldraziMonumentBase {
  constructor(game) {
    super(game, "Eldrazi Monument", "Zendikar", "ZEN");
  }
}

module.exports = EldraziMonument;
