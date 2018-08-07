"use strict";
const Constants = require ("../../../Constants");
const NucklaveeBase = require("../setDDS/Nucklavee");

class Nucklavee extends NucklaveeBase {
  constructor (game) {
    super(game, "Nucklavee", "Eventide", "EVE");
  }
}

module.exports = Nucklavee;
