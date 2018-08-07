"use strict";
const Constants = require ("../../../Constants");
const FestercreepBase = require("../setCM2/Festercreep");

class Festercreep extends FestercreepBase {
  constructor (game) {
    super(game, "Festercreep", "Commander 2016", "C16");
  }
}

module.exports = Festercreep;
