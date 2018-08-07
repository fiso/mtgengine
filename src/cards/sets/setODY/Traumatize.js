"use strict";
const Constants = require ("../../../Constants");
const TraumatizeBase = require("../setM14/Traumatize");

class Traumatize extends TraumatizeBase {
  constructor (game) {
    super(game, "Traumatize", "Odyssey", "ODY");
  }
}

module.exports = Traumatize;
