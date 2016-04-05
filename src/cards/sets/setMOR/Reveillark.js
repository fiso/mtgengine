"use strict";
const Constants = require ("../../../Constants");
const ReveillarkBase = require("../setMMA/Reveillark");

class Reveillark extends ReveillarkBase {
  constructor(game) {
    super(game, "Reveillark", "Morningtide", "MOR");
  }
}

module.exports = Reveillark;
