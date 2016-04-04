"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AvatarofFuryBase = require("../setCMD/AvatarofFury.js");

class AvatarofFury extends AvatarofFuryBase {
  constructor(game) {
    super(game, "Avatar of Fury", "Prophecy", "PCY");
  }
}

module.exports = AvatarofFury;
