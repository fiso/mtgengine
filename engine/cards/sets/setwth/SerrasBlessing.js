"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SerrasBlessingBase = require("../set6ED/SerrasBlessing.js");

class SerrasBlessing extends SerrasBlessingBase {
  constructor(game) {
    super(game, "Serra's Blessing", "Weatherlight", "WTH");
  }
}

module.exports = SerrasBlessing;
