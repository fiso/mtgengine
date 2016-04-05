"use strict";
const Constants = require ("../../../Constants");
const PyroclasmBase = require("../setDKM/Pyroclasm");

class Pyroclasm extends PyroclasmBase {
  constructor(game) {
    super(game, "Pyroclasm", "Seventh Edition", "7ED");
  }
}

module.exports = Pyroclasm;
