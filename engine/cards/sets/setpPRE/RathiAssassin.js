"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RathiAssassinBase = require("../setNMS/RathiAssassin.js");

class RathiAssassin extends RathiAssassinBase {
  constructor(game) {
    super(game, "Rathi Assassin", "Prerelease Events", "pPRE");
  }
}

module.exports = RathiAssassin;
