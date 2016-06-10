"use strict";
const Constants = require ("../../../Constants");
const MalfegorBase = require("../setCON/Malfegor");

class Malfegor extends MalfegorBase {
  constructor (game) {
    super(game, "Malfegor", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = Malfegor;
