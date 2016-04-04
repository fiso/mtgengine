"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const KaervektheMercilessBase = require("../setARC/KaervektheMerciless.js");

class KaervektheMerciless extends KaervektheMercilessBase {
  constructor(game) {
    super(game, "Kaervek the Merciless", "Time Spiral", "TSP");
  }
}

module.exports = KaervektheMerciless;
