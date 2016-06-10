"use strict";
const Constants = require ("../../../Constants");
const AngelicWallBase = require("../setAVR/AngelicWall");

class AngelicWall extends AngelicWallBase {
  constructor (game) {
    super(game, "Angelic Wall", "Tenth Edition", "10E");
  }
}

module.exports = AngelicWall;
