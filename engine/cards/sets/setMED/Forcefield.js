"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ForcefieldBase = require("../setCED/Forcefield.js");

class Forcefield extends ForcefieldBase {
  constructor(game) {
    super(game, "Forcefield", "Masters Edition", "MED");
  }
}

module.exports = Forcefield;
