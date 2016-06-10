"use strict";
const Constants = require ("../../../Constants");
const LevitationBase = require("../setM10/Levitation");

class Levitation extends LevitationBase {
  constructor (game) {
    super(game, "Levitation", "Magic 2012", "M12");
  }
}

module.exports = Levitation;
