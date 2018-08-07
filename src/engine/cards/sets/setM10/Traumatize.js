"use strict";
const Constants = require ("../../../Constants");
const TraumatizeBase = require("../setM14/Traumatize");

class Traumatize extends TraumatizeBase {
  constructor (game) {
    super(game, "Traumatize", "Magic 2010", "M10");
  }
}

module.exports = Traumatize;
