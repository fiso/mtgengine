"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CinderWallBase = require("../setDDG/CinderWall.js");

class CinderWall extends CinderWallBase {
  constructor(game) {
    super(game, "Cinder Wall", "Weatherlight", "WTH");
  }
}

module.exports = CinderWall;
