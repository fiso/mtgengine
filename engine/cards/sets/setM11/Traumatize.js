"use strict";
const Constants = require ("../../../Constants");
const TraumatizeBase = require("../setM10/Traumatize");

class Traumatize extends TraumatizeBase {
  constructor(game) {
    super(game, "Traumatize", "Magic 2011", "M11");
  }
}

module.exports = Traumatize;
