"use strict";
const Constants = require ("../../../Constants");
const KnightExemplarBase = require("../setDDG/KnightExemplar");

class KnightExemplar extends KnightExemplarBase {
  constructor (game) {
    super(game, "Knight Exemplar", "Resale Promos", "PRES");
  }
}

module.exports = KnightExemplar;
