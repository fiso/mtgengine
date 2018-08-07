"use strict";
const Constants = require ("../../../Constants");
const BrainstormBase = require("../setC18/Brainstorm");

class Brainstorm extends BrainstormBase {
  constructor (game) {
    super(game, "Brainstorm", "Legacy Championship", "OLGC");
  }
}

module.exports = Brainstorm;
