"use strict";
const Constants = require ("../../../Constants");
const MalfegorBase = require("../setCON/Malfegor");

class Malfegor extends MalfegorBase {
  constructor (game) {
    super(game, "Malfegor", "Prerelease Events", "pPRE");
  }
}

module.exports = Malfegor;
