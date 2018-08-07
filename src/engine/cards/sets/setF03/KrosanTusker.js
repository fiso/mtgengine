"use strict";
const Constants = require ("../../../Constants");
const KrosanTuskerBase = require("../setDDU/KrosanTusker");

class KrosanTusker extends KrosanTuskerBase {
  constructor (game) {
    super(game, "Krosan Tusker", "Friday Night Magic 2003", "F03");
  }
}

module.exports = KrosanTusker;
