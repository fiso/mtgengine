"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const HellsCaretakerBase = require("../setCHR/HellsCaretaker.js");

class HellsCaretaker extends HellsCaretakerBase {
  constructor(game) {
    super(game, "Hell's Caretaker", "Legends", "LEG");
  }
}

module.exports = HellsCaretaker;
