"use strict";
const Constants = require ("../../../Constants");
const AngelicWallBase = require("../setAVR/AngelicWall");

class AngelicWall extends AngelicWallBase {
  constructor (game) {
    super(game, "Angelic Wall", "Magic 2014 Core Set", "M14");
  }
}

module.exports = AngelicWall;
