"use strict";
const Constants = require ("../../../Constants");
const MonasterySiegeBase = require("../setC17/MonasterySiege");

class MonasterySiege extends MonasterySiegeBase {
  constructor (game) {
    super(game, "Monastery Siege", "Fate Reforged", "FRF");
  }
}

module.exports = MonasterySiege;
