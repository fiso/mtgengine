"use strict";
const Constants = require ("../../../Constants");
const KrosanTuskerBase = require("../setDDU/KrosanTusker");

class KrosanTusker extends KrosanTuskerBase {
  constructor (game) {
    super(game, "Krosan Tusker", "Commander 2013", "C13");
  }
}

module.exports = KrosanTusker;
