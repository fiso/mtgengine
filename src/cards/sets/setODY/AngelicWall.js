"use strict";
const Constants = require ("../../../Constants");
const AngelicWallBase = require("../setAVR/AngelicWall");

class AngelicWall extends AngelicWallBase {
  constructor (game) {
    super(game, "Angelic Wall", "Odyssey", "ODY");
  }
}

module.exports = AngelicWall;
