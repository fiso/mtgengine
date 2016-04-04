"use strict";
const Constants = require ("../../../Constants");
const KnightExemplarBase = require("../setDDG/KnightExemplar");

class KnightExemplar extends KnightExemplarBase {
  constructor(game) {
    super(game, "Knight Exemplar", "Magic 2011", "M11");
  }
}

module.exports = KnightExemplar;
