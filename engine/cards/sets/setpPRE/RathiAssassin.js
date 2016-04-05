"use strict";
const Constants = require ("../../../Constants");
const RathiAssassinBase = require("../setNMS/RathiAssassin");

class RathiAssassin extends RathiAssassinBase {
  constructor(game) {
    super(game, "Rathi Assassin", "Prerelease Events", "pPRE");
  }
}

module.exports = RathiAssassin;
