"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ConjurersClosetBase = require("../setAVR/ConjurersCloset.js");

class ConjurersCloset extends ConjurersClosetBase {
  constructor(game) {
    super(game, "Conjurer's Closet", "Commander 2013 Edition", "C13");
  }
}

module.exports = ConjurersCloset;
