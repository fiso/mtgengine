"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const HeavyBallistaBase = require("../set6ED/HeavyBallista.js");

class HeavyBallista extends HeavyBallistaBase {
  constructor(game) {
    super(game, "Heavy Ballista", "Weatherlight", "WTH");
  }
}

module.exports = HeavyBallista;
