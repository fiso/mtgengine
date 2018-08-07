"use strict";
const Constants = require ("../../../Constants");
const DurkwoodBoarsBase = require("../setS00/DurkwoodBoars");

class DurkwoodBoars extends DurkwoodBoarsBase {
  constructor (game) {
    super(game, "Durkwood Boars", "Fourth Edition", "4ED");
  }
}

module.exports = DurkwoodBoars;
