"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const VividCreekBase = require("../setC13/VividCreek.js");

class VividCreek extends VividCreekBase {
  constructor(game) {
    super(game, "Vivid Creek", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = VividCreek;
