"use strict";
const Constants = require ("../../../Constants");
const DemonsJesterBase = require("../setDVD/DemonsJester");

class DemonsJester extends DemonsJesterBase {
  constructor (game) {
    super(game, "Demon's Jester", "Dissension", "DIS");
  }
}

module.exports = DemonsJester;
