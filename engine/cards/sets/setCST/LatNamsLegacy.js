"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LatNamsLegacyBase = require("../setALL/LatNamsLegacy.js");

class LatNamsLegacy extends LatNamsLegacyBase {
  constructor(game) {
    super(game, "Lat-Nam's Legacy", "Coldsnap Theme Decks", "CST");
  }
}

module.exports = LatNamsLegacy;
