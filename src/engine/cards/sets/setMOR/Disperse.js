"use strict";
const Constants = require ("../../../Constants");
const DisperseBase = require("../setM19/Disperse");

class Disperse extends DisperseBase {
  constructor (game) {
    super(game, "Disperse", "Morningtide", "MOR");
  }
}

module.exports = Disperse;
