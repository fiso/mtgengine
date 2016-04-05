"use strict";
const Constants = require ("../../../Constants");
const BrainstormBase = require("../setBTD/Brainstorm");

class Brainstorm extends BrainstormBase {
  constructor(game) {
    super(game, "Brainstorm", "Commander 2015", "C15");
  }
}

module.exports = Brainstorm;
