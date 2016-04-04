"use strict";
const Constants = require ("../../../Constants");
const WrathofGodBase = require("../setBRB/WrathofGod");

class WrathofGod extends WrathofGodBase {
  constructor(game) {
    super(game, "Wrath of God", "From the Vault: Annihilation (2014)", "V14");
  }
}

module.exports = WrathofGod;
