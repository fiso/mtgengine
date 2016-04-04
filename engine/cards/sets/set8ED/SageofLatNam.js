"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SageofLatNamBase = require("../setATQ/SageofLatNam.js");

class SageofLatNam extends SageofLatNamBase {
  constructor(game) {
    super(game, "Sage of Lat-Nam", "Eighth Edition", "8ED");
  }
}

module.exports = SageofLatNam;
