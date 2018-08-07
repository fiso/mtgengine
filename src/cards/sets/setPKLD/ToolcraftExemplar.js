"use strict";
const Constants = require ("../../../Constants");
const ToolcraftExemplarBase = require("../setKLD/ToolcraftExemplar");

class ToolcraftExemplar extends ToolcraftExemplarBase {
  constructor (game) {
    super(game, "Toolcraft Exemplar", "Kaladesh Promos", "PKLD");
  }
}

module.exports = ToolcraftExemplar;
