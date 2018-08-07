"use strict";
const Constants = require ("../../../Constants");
const DurkwoodBalothBase = require("../setIMA/DurkwoodBaloth");

class DurkwoodBaloth extends DurkwoodBalothBase {
  constructor (game) {
    super(game, "Durkwood Baloth", "Modern Masters", "MMA");
  }
}

module.exports = DurkwoodBaloth;
