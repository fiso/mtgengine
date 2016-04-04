"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MarrowBatsBase = require("../setAVR/MarrowBats.js");

class MarrowBats extends MarrowBatsBase {
  constructor(game) {
    super(game, "Marrow Bats", "Commander 2013 Edition", "C13");
  }
}

module.exports = MarrowBats;
