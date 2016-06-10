"use strict";
const Constants = require ("../../../Constants");
const KrosanTuskerBase = require("../setARC/KrosanTusker");

class KrosanTusker extends KrosanTuskerBase {
  constructor (game) {
    super(game, "Krosan Tusker", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = KrosanTusker;
