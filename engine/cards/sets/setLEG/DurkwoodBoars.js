"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DurkwoodBoarsBase = require("../set5ED/DurkwoodBoars.js");

class DurkwoodBoars extends DurkwoodBoarsBase {
  constructor(game) {
    super(game, "Durkwood Boars", "Legends", "LEG");
  }
}

module.exports = DurkwoodBoars;
