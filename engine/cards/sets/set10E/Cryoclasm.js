"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CryoclasmBase = require("../setCSP/Cryoclasm.js");

class Cryoclasm extends CryoclasmBase {
  constructor(game) {
    super(game, "Cryoclasm", "Tenth Edition", "10E");
  }
}

module.exports = Cryoclasm;
