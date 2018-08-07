"use strict";
const Constants = require ("../../../Constants");
const MalfegorBase = require("../setIMA/Malfegor");

class Malfegor extends MalfegorBase {
  constructor (game) {
    super(game, "Malfegor", "Magic Online Promos", "PRM");
  }
}

module.exports = Malfegor;
