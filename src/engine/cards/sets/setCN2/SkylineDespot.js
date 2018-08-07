"use strict";
const Constants = require ("../../../Constants");
const SkylineDespotBase = require("../setPZ2/SkylineDespot");

class SkylineDespot extends SkylineDespotBase {
  constructor (game) {
    super(game, "Skyline Despot", "Conspiracy: Take the Crown", "CN2");
  }
}

module.exports = SkylineDespot;
