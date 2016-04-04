"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PyroclasmBase = require("../setDKM/Pyroclasm.js");

class Pyroclasm extends PyroclasmBase {
  constructor(game) {
    super(game, "Pyroclasm", "Ninth Edition", "9ED");
  }
}

module.exports = Pyroclasm;
