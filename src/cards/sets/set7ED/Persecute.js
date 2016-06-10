"use strict";
const Constants = require ("../../../Constants");
const PersecuteBase = require("../set8ED/Persecute");

class Persecute extends PersecuteBase {
  constructor (game) {
    super(game, "Persecute", "Seventh Edition", "7ED");
  }
}

module.exports = Persecute;
