"use strict";
const Constants = require ("../../../Constants");
const FarrelsZealotBase = require("../setME2/FarrelsZealot");

class FarrelsZealot extends FarrelsZealotBase {
  constructor (game) {
    super(game, "Farrel's Zealot", "Fallen Empires", "FEM");
  }
}

module.exports = FarrelsZealot;
