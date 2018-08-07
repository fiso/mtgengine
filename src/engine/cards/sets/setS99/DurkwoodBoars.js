"use strict";
const Constants = require ("../../../Constants");
const DurkwoodBoarsBase = require("../setS00/DurkwoodBoars");

class DurkwoodBoars extends DurkwoodBoarsBase {
  constructor (game) {
    super(game, "Durkwood Boars", "Starter 1999", "S99");
  }
}

module.exports = DurkwoodBoars;
