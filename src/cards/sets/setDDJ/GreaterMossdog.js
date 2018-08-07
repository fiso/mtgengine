"use strict";
const Constants = require ("../../../Constants");
const GreaterMossdogBase = require("../setMMA/GreaterMossdog");

class GreaterMossdog extends GreaterMossdogBase {
  constructor (game) {
    super(game, "Greater Mossdog", "Duel Decks: Izzet vs. Golgari", "DDJ");
  }
}

module.exports = GreaterMossdog;
