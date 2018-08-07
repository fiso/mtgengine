"use strict";
const Constants = require ("../../../Constants");
const SeektheHorizonBase = require("../setDDR/SeektheHorizon");

class SeektheHorizon extends SeektheHorizonBase {
  constructor (game) {
    super(game, "Seek the Horizon", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = SeektheHorizon;
