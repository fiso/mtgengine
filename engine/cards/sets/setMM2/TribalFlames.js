"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TribalFlamesBase = require("../setDDE/TribalFlames.js");

class TribalFlames extends TribalFlamesBase {
  constructor(game) {
    super(game, "Tribal Flames", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = TribalFlames;
