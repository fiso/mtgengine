"use strict";
const Constants = require ("../../../Constants");
const CanyonMinotaurBase = require("../setCON/CanyonMinotaur");

class CanyonMinotaur extends CanyonMinotaurBase {
  constructor(game) {
    super(game, "Canyon Minotaur", "Magic 2011", "M11");
  }
}

module.exports = CanyonMinotaur;
