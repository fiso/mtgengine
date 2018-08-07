"use strict";
const Constants = require ("../../../Constants");
const ConjurersClosetBase = require("../setCMA/ConjurersCloset");

class ConjurersCloset extends ConjurersClosetBase {
  constructor (game) {
    super(game, "Conjurer's Closet", "Commander 2013", "C13");
  }
}

module.exports = ConjurersCloset;
