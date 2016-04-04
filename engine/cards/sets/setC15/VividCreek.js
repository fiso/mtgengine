"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const VividCreekBase = require("../setC13/VividCreek.js");

class VividCreek extends VividCreekBase {
  constructor(game) {
    super(game, "Vivid Creek", "Commander 2015", "C15");
  }
}

module.exports = VividCreek;
