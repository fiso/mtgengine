"use strict";
const Constants = require ("../../../Constants");
const QueenMarchesaBase = require("../setPZ2/QueenMarchesa");

class QueenMarchesa extends QueenMarchesaBase {
  constructor (game) {
    super(game, "Queen Marchesa", "Conspiracy: Take the Crown", "CN2");
  }
}

module.exports = QueenMarchesa;
