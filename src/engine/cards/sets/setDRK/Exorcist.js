"use strict";
const Constants = require ("../../../Constants");
const ExorcistBase = require("../setME3/Exorcist");

class Exorcist extends ExorcistBase {
  constructor (game) {
    super(game, "Exorcist", "The Dark", "DRK");
  }
}

module.exports = Exorcist;
