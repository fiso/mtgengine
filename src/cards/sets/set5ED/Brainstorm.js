"use strict";
const Constants = require ("../../../Constants");
const BrainstormBase = require("../setBTD/Brainstorm");

class Brainstorm extends BrainstormBase {
  constructor (game) {
    super(game, "Brainstorm", "Fifth Edition", "5ED");
  }
}

module.exports = Brainstorm;
