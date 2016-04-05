"use strict";
const Constants = require ("../../../Constants");
const ConjurersClosetBase = require("../setAVR/ConjurersCloset");

class ConjurersCloset extends ConjurersClosetBase {
  constructor(game) {
    super(game, "Conjurer's Closet", "Commander 2013 Edition", "C13");
  }
}

module.exports = ConjurersCloset;
