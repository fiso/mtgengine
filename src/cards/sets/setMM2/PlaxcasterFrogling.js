"use strict";
const Constants = require ("../../../Constants");
const PlaxcasterFroglingBase = require("../setDIS/PlaxcasterFrogling");

class PlaxcasterFrogling extends PlaxcasterFroglingBase {
  constructor (game) {
    super(game, "Plaxcaster Frogling", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = PlaxcasterFrogling;
