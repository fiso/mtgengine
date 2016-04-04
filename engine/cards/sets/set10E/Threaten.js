"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ThreatenBase = require("../set9ED/Threaten.js");

class Threaten extends ThreatenBase {
  constructor(game) {
    super(game, "Threaten", "Tenth Edition", "10E");
  }
}

module.exports = Threaten;
