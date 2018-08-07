"use strict";
const Constants = require ("../../../Constants");
const KnightofStromgaldBase = require("../setME2/KnightofStromgald");

class KnightofStromgald extends KnightofStromgaldBase {
  constructor (game) {
    super(game, "Knight of Stromgald", "Fifth Edition", "5ED");
  }
}

module.exports = KnightofStromgald;
