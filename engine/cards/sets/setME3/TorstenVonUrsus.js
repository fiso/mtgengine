"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TorstenVonUrsusBase = require("../setLEG/TorstenVonUrsus.js");

class TorstenVonUrsus extends TorstenVonUrsusBase {
  constructor(game) {
    super(game, "Torsten Von Ursus", "Masters Edition III", "ME3");
  }
}

module.exports = TorstenVonUrsus;
