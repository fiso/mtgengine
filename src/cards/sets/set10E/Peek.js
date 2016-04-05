"use strict";
const Constants = require ("../../../Constants");
const PeekBase = require("../setODY/Peek");

class Peek extends PeekBase {
  constructor(game) {
    super(game, "Peek", "Tenth Edition", "10E");
  }
}

module.exports = Peek;
