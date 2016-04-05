"use strict";
const Constants = require ("../../../Constants");
const KrosanTuskerBase = require("../setARC/KrosanTusker");

class KrosanTusker extends KrosanTuskerBase {
  constructor(game) {
    super(game, "Krosan Tusker", "Commander 2013 Edition", "C13");
  }
}

module.exports = KrosanTusker;
