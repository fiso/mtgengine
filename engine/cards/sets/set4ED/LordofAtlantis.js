"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LordofAtlantisBase = require("../set6ED/LordofAtlantis.js");

class LordofAtlantis extends LordofAtlantisBase {
  constructor(game) {
    super(game, "Lord of Atlantis", "Fourth Edition", "4ED");
  }
}

module.exports = LordofAtlantis;
