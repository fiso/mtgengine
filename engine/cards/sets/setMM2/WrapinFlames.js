"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WrapinFlamesBase = require("../setCNS/WrapinFlames.js");

class WrapinFlames extends WrapinFlamesBase {
  constructor(game) {
    super(game, "Wrap in Flames", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = WrapinFlames;
