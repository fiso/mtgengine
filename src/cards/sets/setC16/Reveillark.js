"use strict";
const Constants = require ("../../../Constants");
const ReveillarkBase = require("../setCM2/Reveillark");

class Reveillark extends ReveillarkBase {
  constructor (game) {
    super(game, "Reveillark", "Commander 2016", "C16");
  }
}

module.exports = Reveillark;
