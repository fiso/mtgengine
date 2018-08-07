"use strict";
const Constants = require ("../../../Constants");
const GravepurgeBase = require("../setDTK/Gravepurge");

class Gravepurge extends GravepurgeBase {
  constructor (game) {
    super(game, "Gravepurge", "Dark Ascension", "DKA");
  }
}

module.exports = Gravepurge;
