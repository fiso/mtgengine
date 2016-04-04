"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WarpWorldBase = require("../setM10/WarpWorld.js");

class WarpWorld extends WarpWorldBase {
  constructor(game) {
    super(game, "Warp World", "Tenth Edition", "10E");
  }
}

module.exports = WarpWorld;
