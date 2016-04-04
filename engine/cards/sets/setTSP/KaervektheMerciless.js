"use strict";
const Constants = require ("../../../Constants");
const KaervektheMercilessBase = require("../setARC/KaervektheMerciless");

class KaervektheMerciless extends KaervektheMercilessBase {
  constructor(game) {
    super(game, "Kaervek the Merciless", "Time Spiral", "TSP");
  }
}

module.exports = KaervektheMerciless;
