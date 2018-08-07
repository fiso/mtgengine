"use strict";
const Constants = require ("../../../Constants");
const LevitationBase = require("../setM12/Levitation");

class Levitation extends LevitationBase {
  constructor (game) {
    super(game, "Levitation", "Ninth Edition", "9ED");
  }
}

module.exports = Levitation;
