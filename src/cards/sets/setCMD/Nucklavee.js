"use strict";
const Constants = require ("../../../Constants");
const NucklaveeBase = require("../setDDS/Nucklavee");

class Nucklavee extends NucklaveeBase {
  constructor (game) {
    super(game, "Nucklavee", "Commander 2011", "CMD");
  }
}

module.exports = Nucklavee;
