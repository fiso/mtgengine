"use strict";
const Constants = require ("../../../Constants");
const MalfegorBase = require("../setIMA/Malfegor");

class Malfegor extends MalfegorBase {
  constructor (game) {
    super(game, "Malfegor", "Commander 2011", "CMD");
  }
}

module.exports = Malfegor;
