"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DurkwoodBalothBase = require("../setMMA/DurkwoodBaloth.js");

class DurkwoodBaloth extends DurkwoodBalothBase {
  constructor(game) {
    super(game, "Durkwood Baloth", "Time Spiral", "TSP");
  }
}

module.exports = DurkwoodBaloth;
