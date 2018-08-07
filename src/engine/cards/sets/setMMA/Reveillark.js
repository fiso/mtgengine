"use strict";
const Constants = require ("../../../Constants");
const ReveillarkBase = require("../setCM2/Reveillark");

class Reveillark extends ReveillarkBase {
  constructor (game) {
    super(game, "Reveillark", "Modern Masters", "MMA");
  }
}

module.exports = Reveillark;
