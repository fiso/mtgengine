"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PlaxcasterFroglingBase = require("../setDIS/PlaxcasterFrogling.js");

class PlaxcasterFrogling extends PlaxcasterFroglingBase {
  constructor(game) {
    super(game, "Plaxcaster Frogling", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = PlaxcasterFrogling;
