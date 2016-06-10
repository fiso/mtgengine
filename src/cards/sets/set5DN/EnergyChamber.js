"use strict";
const Constants = require ("../../../Constants");
const EnergyChamberBase = require("../setDDF/EnergyChamber");

class EnergyChamber extends EnergyChamberBase {
  constructor (game) {
    super(game, "Energy Chamber", "Fifth Dawn", "5DN");
  }
}

module.exports = EnergyChamber;
