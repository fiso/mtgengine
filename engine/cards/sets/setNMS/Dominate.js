"use strict";
const Constants = require ("../../../Constants");
const DominateBase = require("../setC15/Dominate");

class Dominate extends DominateBase {
  constructor(game) {
    super(game, "Dominate", "Nemesis", "NMS");
  }
}

module.exports = Dominate;
