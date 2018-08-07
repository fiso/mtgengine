"use strict";
const Constants = require ("../../../Constants");
const PeekBase = require("../set10E/Peek");

class Peek extends PeekBase {
  constructor (game) {
    super(game, "Peek", "Odyssey", "ODY");
  }
}

module.exports = Peek;
