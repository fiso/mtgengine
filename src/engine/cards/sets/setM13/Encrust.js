"use strict";
const Constants = require ("../../../Constants");
const EncrustBase = require("../setM15/Encrust");

class Encrust extends EncrustBase {
  constructor (game) {
    super(game, "Encrust", "Magic 2013", "M13");
  }
}

module.exports = Encrust;
