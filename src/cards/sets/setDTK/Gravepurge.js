"use strict";
const Constants = require ("../../../Constants");
const GravepurgeBase = require("../setDKA/Gravepurge");

class Gravepurge extends GravepurgeBase {
  constructor (game) {
    super(game, "Gravepurge", "Dragons of Tarkir", "DTK");
  }
}

module.exports = Gravepurge;
