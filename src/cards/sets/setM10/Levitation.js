"use strict";
const Constants = require ("../../../Constants");
const LevitationBase = require("../setM12/Levitation");

class Levitation extends LevitationBase {
  constructor (game) {
    super(game, "Levitation", "Magic 2010", "M10");
  }
}

module.exports = Levitation;
