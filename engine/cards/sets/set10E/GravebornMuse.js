"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GravebornMuseBase = require("../setLGN/GravebornMuse.js");

class GravebornMuse extends GravebornMuseBase {
  constructor(game) {
    super(game, "Graveborn Muse", "Tenth Edition", "10E");
  }
}

module.exports = GravebornMuse;
