"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MutavaultBase = require("../setpCMP/Mutavault.js");

class Mutavault extends MutavaultBase {
  constructor(game) {
    super(game, "Mutavault", "Morningtide", "MOR");
  }
}

module.exports = Mutavault;
