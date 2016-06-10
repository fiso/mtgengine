"use strict";
const Constants = require ("../../../Constants");
const LevitationBase = require("../setM10/Levitation");

class Levitation extends LevitationBase {
  constructor (game) {
    super(game, "Levitation", "Urza's Legacy", "ULG");
  }
}

module.exports = Levitation;
