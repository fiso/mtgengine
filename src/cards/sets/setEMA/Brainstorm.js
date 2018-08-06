"use strict";
const Constants = require ("../../../Constants");
const BrainstormBase = require("../setBTD/Brainstorm");

class Brainstorm extends BrainstormBase {
  constructor (game) {
    super(game, "Brainstorm", "Eternal Masters", "EMA");
  }
}

module.exports = Brainstorm;
