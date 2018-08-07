"use strict";
const Constants = require ("../../../Constants");
const StreamofLifeBase = require("../set9ED/StreamofLife");

class StreamofLife extends StreamofLifeBase {
  constructor (game) {
    super(game, "Stream of Life", "Classic Sixth Edition", "6ED");
  }
}

module.exports = StreamofLife;
