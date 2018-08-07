"use strict";
const Constants = require ("../../../Constants");
const PlaxcasterFroglingBase = require("../setMM2/PlaxcasterFrogling");

class PlaxcasterFrogling extends PlaxcasterFroglingBase {
  constructor (game) {
    super(game, "Plaxcaster Frogling", "Dissension", "DIS");
  }
}

module.exports = PlaxcasterFrogling;
