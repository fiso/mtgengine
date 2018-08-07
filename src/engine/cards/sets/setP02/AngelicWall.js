"use strict";
const Constants = require ("../../../Constants");
const AngelicWallBase = require("../setM14/AngelicWall");

class AngelicWall extends AngelicWallBase {
  constructor (game) {
    super(game, "Angelic Wall", "Portal Second Age", "P02");
  }
}

module.exports = AngelicWall;
