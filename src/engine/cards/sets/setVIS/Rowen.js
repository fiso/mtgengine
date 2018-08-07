"use strict";
const Constants = require ("../../../Constants");
const RowenBase = require("../set7ED/Rowen");

class Rowen extends RowenBase {
  constructor (game) {
    super(game, "Rowen", "Visions", "VIS");
  }
}

module.exports = Rowen;
