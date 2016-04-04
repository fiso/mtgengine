"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PyroclasmBase = require("../setDKM/Pyroclasm.js");

class Pyroclasm extends PyroclasmBase {
  constructor(game) {
    super(game, "Pyroclasm", "Seventh Edition", "7ED");
  }
}

module.exports = Pyroclasm;
