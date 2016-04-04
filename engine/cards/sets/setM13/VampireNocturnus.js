"use strict";
const Constants = require ("../../../Constants");
const VampireNocturnusBase = require("../setM10/VampireNocturnus");

class VampireNocturnus extends VampireNocturnusBase {
  constructor(game) {
    super(game, "Vampire Nocturnus", "Magic 2013", "M13");
  }
}

module.exports = VampireNocturnus;
