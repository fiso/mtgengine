"use strict";
const Constants = require ("../../../Constants");
const FestercreepBase = require("../setCM2/Festercreep");

class Festercreep extends FestercreepBase {
  constructor (game) {
    super(game, "Festercreep", "Morningtide", "MOR");
  }
}

module.exports = Festercreep;
