"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AngelicWallBase = require("../setAVR/AngelicWall.js");

class AngelicWall extends AngelicWallBase {
  constructor(game) {
    super(game, "Angelic Wall", "Magic 2014 Core Set", "M14");
  }
}

module.exports = AngelicWall;
