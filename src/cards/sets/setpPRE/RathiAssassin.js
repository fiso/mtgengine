"use strict";
const Constants = require ("../../../Constants");
const RathiAssassinBase = require("../setPRM/RathiAssassin");

class RathiAssassin extends RathiAssassinBase {
  constructor (game) {
    super(game, "Rathi Assassin", "Prerelease Events", "PPRE");
  }
}

module.exports = RathiAssassin;
