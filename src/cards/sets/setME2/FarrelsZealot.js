"use strict";
const Constants = require ("../../../Constants");
const FarrelsZealotBase = require("../setFEM/FarrelsZealot");

class FarrelsZealot extends FarrelsZealotBase {
  constructor (game) {
    super(game, "Farrel's Zealot", "Masters Edition II", "ME2");
  }
}

module.exports = FarrelsZealot;
