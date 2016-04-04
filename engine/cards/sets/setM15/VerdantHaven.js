"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const VerdantHavenBase = require("../setGTC/VerdantHaven.js");

class VerdantHaven extends VerdantHavenBase {
  constructor(game) {
    super(game, "Verdant Haven", "Magic 2015 Core Set", "M15");
  }
}

module.exports = VerdantHaven;
