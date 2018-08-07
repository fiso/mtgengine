"use strict";
const Constants = require ("../../../Constants");
const LevitationBase = require("../setM12/Levitation");

class Levitation extends LevitationBase {
  constructor (game) {
    super(game, "Levitation", "Seventh Edition", "7ED");
  }
}

module.exports = Levitation;
