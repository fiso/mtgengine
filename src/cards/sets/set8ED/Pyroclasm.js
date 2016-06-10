"use strict";
const Constants = require ("../../../Constants");
const PyroclasmBase = require("../setDKM/Pyroclasm");

class Pyroclasm extends PyroclasmBase {
  constructor (game) {
    super(game, "Pyroclasm", "Eighth Edition", "8ED");
  }
}

module.exports = Pyroclasm;
