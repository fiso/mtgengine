"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AngelicWallBase = require("../setAVR/AngelicWall.js");

class AngelicWall extends AngelicWallBase {
  constructor(game) {
    super(game, "Angelic Wall", "Tenth Edition", "10E");
  }
}

module.exports = AngelicWall;
