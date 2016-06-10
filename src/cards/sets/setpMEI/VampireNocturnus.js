"use strict";
const Constants = require ("../../../Constants");
const VampireNocturnusBase = require("../setM10/VampireNocturnus");

class VampireNocturnus extends VampireNocturnusBase {
  constructor (game) {
    super(game, "Vampire Nocturnus", "Media Inserts", "pMEI");
  }
}

module.exports = VampireNocturnus;
