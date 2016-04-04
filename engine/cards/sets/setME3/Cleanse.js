"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CleanseBase = require("../setLEG/Cleanse.js");

class Cleanse extends CleanseBase {
  constructor(game) {
    super(game, "Cleanse", "Masters Edition III", "ME3");
  }
}

module.exports = Cleanse;
