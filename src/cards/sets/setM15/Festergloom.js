"use strict";
const Constants = require ("../../../Constants");
const FestergloomBase = require("../setCN2/Festergloom");

class Festergloom extends FestergloomBase {
  constructor (game) {
    super(game, "Festergloom", "Magic 2015", "M15");
  }
}

module.exports = Festergloom;
