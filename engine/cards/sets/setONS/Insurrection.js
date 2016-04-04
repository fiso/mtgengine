"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const InsurrectionBase = require("../setCMD/Insurrection.js");

class Insurrection extends InsurrectionBase {
  constructor(game) {
    super(game, "Insurrection", "Onslaught", "ONS");
  }
}

module.exports = Insurrection;
