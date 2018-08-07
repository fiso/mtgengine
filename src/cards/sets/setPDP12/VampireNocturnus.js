"use strict";
const Constants = require ("../../../Constants");
const VampireNocturnusBase = require("../setM13/VampireNocturnus");

class VampireNocturnus extends VampireNocturnusBase {
  constructor (game) {
    super(game, "Vampire Nocturnus", "Duels of the Planeswalkers Promos 2012", "PDP12");
  }
}

module.exports = VampireNocturnus;
