"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const KnightsofThornBase = require("../setMED/KnightsofThorn.js");

class KnightsofThorn extends KnightsofThornBase {
  constructor(game) {
    super(game, "Knights of Thorn", "The Dark", "DRK");
  }
}

module.exports = KnightsofThorn;
