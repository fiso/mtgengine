"use strict";
const Constants = require ("../../../Constants");
const BonehoardBase = require("../setCMA/Bonehoard");

class Bonehoard extends BonehoardBase {
  constructor (game) {
    super(game, "Bonehoard", "Commander 2014", "C14");
  }
}

module.exports = Bonehoard;
