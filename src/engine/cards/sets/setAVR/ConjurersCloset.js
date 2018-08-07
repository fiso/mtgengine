"use strict";
const Constants = require ("../../../Constants");
const ConjurersClosetBase = require("../setCMA/ConjurersCloset");

class ConjurersCloset extends ConjurersClosetBase {
  constructor (game) {
    super(game, "Conjurer's Closet", "Avacyn Restored", "AVR");
  }
}

module.exports = ConjurersCloset;
