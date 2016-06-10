"use strict";
const Constants = require ("../../../Constants");
const DurkwoodBoarsBase = require("../set5ED/DurkwoodBoars");

class DurkwoodBoars extends DurkwoodBoarsBase {
  constructor (game) {
    super(game, "Durkwood Boars", "Fourth Edition", "4ED");
  }
}

module.exports = DurkwoodBoars;
