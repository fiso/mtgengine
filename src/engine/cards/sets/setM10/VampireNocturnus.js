"use strict";
const Constants = require ("../../../Constants");
const VampireNocturnusBase = require("../setM13/VampireNocturnus");

class VampireNocturnus extends VampireNocturnusBase {
  constructor (game) {
    super(game, "Vampire Nocturnus", "Magic 2010", "M10");
  }
}

module.exports = VampireNocturnus;
