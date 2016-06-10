"use strict";
const Constants = require ("../../../Constants");
const PyroclasmBase = require("../setDKM/Pyroclasm");

class Pyroclasm extends PyroclasmBase {
  constructor (game) {
    super(game, "Pyroclasm", "Magic 2011", "M11");
  }
}

module.exports = Pyroclasm;
