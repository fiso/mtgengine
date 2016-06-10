"use strict";
const Constants = require ("../../../Constants");
const MiseBase = require("../setpARL/Mise");

class Mise extends MiseBase {
  constructor (game) {
    super(game, "Mise", "Unhinged", "UNH");
  }
}

module.exports = Mise;
