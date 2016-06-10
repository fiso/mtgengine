"use strict";
const Constants = require ("../../../Constants");
const BrainstormBase = require("../setBTD/Brainstorm");

class Brainstorm extends BrainstormBase {
  constructor (game) {
    super(game, "Brainstorm", "Vintage Masters", "VMA");
  }
}

module.exports = Brainstorm;
