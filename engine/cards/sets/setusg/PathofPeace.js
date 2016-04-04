"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PathofPeaceBase = require("../setPOR/PathofPeace.js");

class PathofPeace extends PathofPeaceBase {
  constructor(game) {
    super(game, "Path of Peace", "Urza's Saga", "USG");
  }
}

module.exports = PathofPeace;
