"use strict";
const Constants = require ("../../../Constants");
const DurkwoodBoarsBase = require("../setS00/DurkwoodBoars");

class DurkwoodBoars extends DurkwoodBoarsBase {
  constructor (game) {
    super(game, "Durkwood Boars", "Introductory Two-Player Set", "ITP");
  }
}

module.exports = DurkwoodBoars;
