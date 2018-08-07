"use strict";
const Constants = require ("../../../Constants");
const DreamHallsBase = require("../setTPR/DreamHalls");

class DreamHalls extends DreamHallsBase {
  constructor (game) {
    super(game, "Dream Halls", "Stronghold", "STH");
  }
}

module.exports = DreamHalls;
