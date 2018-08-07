"use strict";
const Constants = require ("../../../Constants");
const CaltropsBase = require("../set7ED/Caltrops");

class Caltrops extends CaltropsBase {
  constructor (game) {
    super(game, "Caltrops", "Urza's Destiny", "UDS");
  }
}

module.exports = Caltrops;
