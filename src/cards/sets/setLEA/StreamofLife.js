"use strict";
const Constants = require ("../../../Constants");
const StreamofLifeBase = require("../set6ED/StreamofLife");

class StreamofLife extends StreamofLifeBase {
  constructor (game) {
    super(game, "Stream of Life", "Limited Edition Alpha", "LEA");
  }
}

module.exports = StreamofLife;
