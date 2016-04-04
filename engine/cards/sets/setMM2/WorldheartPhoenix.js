"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WorldheartPhoenixBase = require("../setCON/WorldheartPhoenix.js");

class WorldheartPhoenix extends WorldheartPhoenixBase {
  constructor(game) {
    super(game, "Worldheart Phoenix", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = WorldheartPhoenix;
