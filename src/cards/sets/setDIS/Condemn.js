"use strict";
const Constants = require ("../../../Constants");
const CondemnBase = require("../setC17/Condemn");

class Condemn extends CondemnBase {
  constructor (game) {
    super(game, "Condemn", "Dissension", "DIS");
  }
}

module.exports = Condemn;
