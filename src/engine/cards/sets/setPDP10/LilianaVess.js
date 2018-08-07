"use strict";
const Constants = require ("../../../Constants");
const LilianaVessBase = require("../setGVL/LilianaVess");

class LilianaVess extends LilianaVessBase {
  constructor (game) {
    super(game, "Liliana Vess", "Duels of the Planeswalkers Promos 2010", "PDP10");
  }
}

module.exports = LilianaVess;
