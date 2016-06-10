"use strict";
const Constants = require ("../../../Constants");
const DurkwoodBalothBase = require("../setMMA/DurkwoodBaloth");

class DurkwoodBaloth extends DurkwoodBalothBase {
  constructor (game) {
    super(game, "Durkwood Baloth", "Time Spiral", "TSP");
  }
}

module.exports = DurkwoodBaloth;
