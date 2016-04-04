"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const KnightExemplarBase = require("../setDDG/KnightExemplar.js");

class KnightExemplar extends KnightExemplarBase {
  constructor(game) {
    super(game, "Knight Exemplar", "Media Inserts", "pMEI");
  }
}

module.exports = KnightExemplar;
