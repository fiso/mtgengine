"use strict";
const Constants = require ("../../../Constants");
const NehebtheWorthyBase = require("../setAKH/NehebtheWorthy");

class NehebtheWorthy extends NehebtheWorthyBase {
  constructor (game) {
    super(game, "Neheb, the Worthy", "Amonkhet Promos", "PAKH");
  }
}

module.exports = NehebtheWorthy;
