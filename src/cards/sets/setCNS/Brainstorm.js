"use strict";
const Constants = require ("../../../Constants");
const BrainstormBase = require("../setBTD/Brainstorm");

class Brainstorm extends BrainstormBase {
  constructor(game) {
    super(game, "Brainstorm", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = Brainstorm;
