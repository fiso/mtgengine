"use strict";
const Constants = require ("../../../Constants");
const AgyremBase = require("../setPCA/Agyrem");

class Agyrem extends AgyremBase {
  constructor (game) {
    super(game, "Agyrem", "Planechase", "HOP");
  }
}

module.exports = Agyrem;
