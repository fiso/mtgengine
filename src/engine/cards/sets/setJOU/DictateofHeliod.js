"use strict";
const Constants = require ("../../../Constants");
const DictateofHeliodBase = require("../setC15/DictateofHeliod");

class DictateofHeliod extends DictateofHeliodBase {
  constructor (game) {
    super(game, "Dictate of Heliod", "Journey into Nyx", "JOU");
  }
}

module.exports = DictateofHeliod;
