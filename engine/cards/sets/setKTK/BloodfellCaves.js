"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BloodfellCavesBase = require("../setFRF/BloodfellCaves.js");

class BloodfellCaves extends BloodfellCavesBase {
  constructor(game) {
    super(game, "Bloodfell Caves", "Khans of Tarkir", "KTK");
  }
}

module.exports = BloodfellCaves;
