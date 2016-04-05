"use strict";
const Constants = require ("../../../Constants");
const BrainstormBase = require("../setBTD/Brainstorm");

class Brainstorm extends BrainstormBase {
  constructor(game) {
    super(game, "Brainstorm", "Masters Edition II", "ME2");
  }
}

module.exports = Brainstorm;
