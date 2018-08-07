"use strict";
const Constants = require ("../../../Constants");
const PyroclasmBase = require("../setA25/Pyroclasm");

class Pyroclasm extends PyroclasmBase {
  constructor (game) {
    super(game, "Pyroclasm", "Ninth Edition", "9ED");
  }
}

module.exports = Pyroclasm;
