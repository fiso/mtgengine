"use strict";
const Constants = require ("../../../Constants");
const AmnesiaBase = require("../setMED/Amnesia");

class Amnesia extends AmnesiaBase {
  constructor (game) {
    super(game, "Amnesia", "The Dark", "DRK");
  }
}

module.exports = Amnesia;
