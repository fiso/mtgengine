"use strict";
const Constants = require ("../../../Constants");
const CryoclasmBase = require("../setCSP/Cryoclasm");

class Cryoclasm extends CryoclasmBase {
  constructor(game) {
    super(game, "Cryoclasm", "Tenth Edition", "10E");
  }
}

module.exports = Cryoclasm;
