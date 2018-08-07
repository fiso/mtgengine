"use strict";
const Constants = require ("../../../Constants");
const NephaliaSmugglerBase = require("../setDDQ/NephaliaSmuggler");

class NephaliaSmuggler extends NephaliaSmugglerBase {
  constructor (game) {
    super(game, "Nephalia Smuggler", "Avacyn Restored", "AVR");
  }
}

module.exports = NephaliaSmuggler;
