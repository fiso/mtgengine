"use strict";
const Constants = require ("../../../Constants");
const StreamofLifeBase = require("../set9ED/StreamofLife");

class StreamofLife extends StreamofLifeBase {
  constructor (game) {
    super(game, "Stream of Life", "Summer Magic / Edgar", "SUM");
  }
}

module.exports = StreamofLife;
