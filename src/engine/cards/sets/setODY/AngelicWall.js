"use strict";
const Constants = require ("../../../Constants");
const AngelicWallBase = require("../setM14/AngelicWall");

class AngelicWall extends AngelicWallBase {
  constructor (game) {
    super(game, "Angelic Wall", "Odyssey", "ODY");
  }
}

module.exports = AngelicWall;
