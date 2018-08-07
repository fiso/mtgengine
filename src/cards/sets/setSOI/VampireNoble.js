"use strict";
const Constants = require ("../../../Constants");
const VampireNobleBase = require("../setE02/VampireNoble");

class VampireNoble extends VampireNobleBase {
  constructor (game) {
    super(game, "Vampire Noble", "Shadows over Innistrad", "SOI");
  }
}

module.exports = VampireNoble;
