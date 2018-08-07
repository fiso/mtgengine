"use strict";
const Constants = require ("../../../Constants");
const ConfiscateBase = require("../setTD0/Confiscate");

class Confiscate extends ConfiscateBase {
  constructor (game) {
    super(game, "Confiscate", "Ninth Edition", "9ED");
  }
}

module.exports = Confiscate;
