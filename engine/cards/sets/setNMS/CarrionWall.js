"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CarrionWallBase = require("../set8ED/CarrionWall.js");

class CarrionWall extends CarrionWallBase {
  constructor(game) {
    super(game, "Carrion Wall", "Nemesis", "NMS");
  }
}

module.exports = CarrionWall;
