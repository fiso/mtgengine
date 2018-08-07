"use strict";
const Constants = require ("../../../Constants");
const AjanisChosenBase = require("../setC18/AjanisChosen");

class AjanisChosen extends AjanisChosenBase {
  constructor (game) {
    super(game, "Ajani's Chosen", "Magic 2014", "M14");
  }
}

module.exports = AjanisChosen;
