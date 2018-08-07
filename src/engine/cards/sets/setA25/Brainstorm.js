"use strict";
const Constants = require ("../../../Constants");
const BrainstormBase = require("../setC18/Brainstorm");

class Brainstorm extends BrainstormBase {
  constructor (game) {
    super(game, "Brainstorm", "Masters 25", "A25");
  }
}

module.exports = Brainstorm;
