"use strict";
const Constants = require ("../../../Constants");
const FirespoutBase = require("../setPZ1/Firespout");

class Firespout extends FirespoutBase {
  constructor (game) {
    super(game, "Firespout", "From the Vault: Annihilation", "V14");
  }
}

module.exports = Firespout;
