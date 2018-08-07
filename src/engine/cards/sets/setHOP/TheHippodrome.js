"use strict";
const Constants = require ("../../../Constants");
const TheHippodromeBase = require("../setPCA/TheHippodrome");

class TheHippodrome extends TheHippodromeBase {
  constructor (game) {
    super(game, "The Hippodrome", "Planechase", "HOP");
  }
}

module.exports = TheHippodrome;
