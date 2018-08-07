"use strict";
const Constants = require ("../../../Constants");
const GruesomeSlaughterBase = require("../setBFZ/GruesomeSlaughter");

class GruesomeSlaughter extends GruesomeSlaughterBase {
  constructor (game) {
    super(game, "Gruesome Slaughter", "Battle for Zendikar Promos", "PBFZ");
  }
}

module.exports = GruesomeSlaughter;
