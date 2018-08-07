"use strict";
const Constants = require ("../../../Constants");
const RepelBase = require("../setVMA/Repel");

class Repel extends RepelBase {
  constructor (game) {
    super(game, "Repel", "Odyssey", "ODY");
  }
}

module.exports = Repel;
