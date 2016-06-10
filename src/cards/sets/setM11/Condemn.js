"use strict";
const Constants = require ("../../../Constants");
const CondemnBase = require("../setC14/Condemn");

class Condemn extends CondemnBase {
  constructor (game) {
    super(game, "Condemn", "Magic 2011", "M11");
  }
}

module.exports = Condemn;
