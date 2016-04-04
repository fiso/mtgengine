"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LivingWallBase = require("../setCED/LivingWall.js");

class LivingWall extends LivingWallBase {
  constructor(game) {
    super(game, "Living Wall", "Unlimited Edition", "2ED");
  }
}

module.exports = LivingWall;
