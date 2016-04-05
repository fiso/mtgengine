"use strict";
const Constants = require ("../../../Constants");
const LevitationBase = require("../setM10/Levitation");

class Levitation extends LevitationBase {
  constructor(game) {
    super(game, "Levitation", "Ninth Edition", "9ED");
  }
}

module.exports = Levitation;
