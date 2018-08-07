"use strict";
const Constants = require ("../../../Constants");
const BoarBase = require("../setTPCA/Boar");

class Boar extends BoarBase {
  constructor (game) {
    super(game, "Boar", "Theros Tokens", "TTHS");
  }
}

module.exports = Boar;
