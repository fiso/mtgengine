"use strict";
const Constants = require ("../../../Constants");
const DoublecastBase = require("../setMTGA/Doublecast");

class Doublecast extends DoublecastBase {
  constructor (game) {
    super(game, "Doublecast", "Core Set 2019", "M19");
  }
}

module.exports = Doublecast;
