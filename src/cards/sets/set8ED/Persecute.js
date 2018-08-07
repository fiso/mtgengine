"use strict";
const Constants = require ("../../../Constants");
const PersecuteBase = require("../set9ED/Persecute");

class Persecute extends PersecuteBase {
  constructor (game) {
    super(game, "Persecute", "Eighth Edition", "8ED");
  }
}

module.exports = Persecute;
