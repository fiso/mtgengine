"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WallofKelpBase = require("../setHML/WallofKelp.js");

class WallofKelp extends WallofKelpBase {
  constructor(game) {
    super(game, "Wall of Kelp", "Masters Edition II", "ME2");
  }
}

module.exports = WallofKelp;
