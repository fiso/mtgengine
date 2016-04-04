"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SeektheHorizonBase = require("../setKTK/SeektheHorizon.js");

class SeektheHorizon extends SeektheHorizonBase {
  constructor(game) {
    super(game, "Seek the Horizon", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = SeektheHorizon;
