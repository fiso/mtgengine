"use strict";
const Constants = require ("../../../Constants");
const AngelofDespairBase = require("../setCMA/AngelofDespair");

class AngelofDespair extends AngelofDespairBase {
  constructor (game) {
    super(game, "Angel of Despair", "Commander 2011", "CMD");
  }
}

module.exports = AngelofDespair;
