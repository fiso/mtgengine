"use strict";
const Constants = require ("../../../Constants");
const MaulSplicerBase = require("../setNPH/MaulSplicer");

class MaulSplicer extends MaulSplicerBase {
  constructor (game) {
    super(game, "Maul Splicer", "Wizards Play Network 2011", "PWP11");
  }
}

module.exports = MaulSplicer;
