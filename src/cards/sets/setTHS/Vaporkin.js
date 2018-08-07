"use strict";
const Constants = require ("../../../Constants");
const VaporkinBase = require("../setCN2/Vaporkin");

class Vaporkin extends VaporkinBase {
  constructor (game) {
    super(game, "Vaporkin", "Theros", "THS");
  }
}

module.exports = Vaporkin;
