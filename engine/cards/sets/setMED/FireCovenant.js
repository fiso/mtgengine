"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FireCovenantBase = require("../setICE/FireCovenant.js");

class FireCovenant extends FireCovenantBase {
  constructor(game) {
    super(game, "Fire Covenant", "Masters Edition", "MED");
  }
}

module.exports = FireCovenant;
