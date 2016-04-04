"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const HowlingWolfBase = require("../setCNS/HowlingWolf.js");

class HowlingWolf extends HowlingWolfBase {
  constructor(game) {
    super(game, "Howling Wolf", "Mercadian Masques", "MMQ");
  }
}

module.exports = HowlingWolf;
