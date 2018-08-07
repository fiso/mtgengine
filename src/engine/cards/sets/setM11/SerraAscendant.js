"use strict";
const Constants = require ("../../../Constants");
const SerraAscendantBase = require("../setIMA/SerraAscendant");

class SerraAscendant extends SerraAscendantBase {
  constructor (game) {
    super(game, "Serra Ascendant", "Magic 2011", "M11");
  }
}

module.exports = SerraAscendant;
