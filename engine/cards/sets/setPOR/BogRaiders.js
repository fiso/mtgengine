"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BogRaidersBase = require("../setM11/BogRaiders.js");

class BogRaiders extends BogRaidersBase {
  constructor(game) {
    super(game, "Bog Raiders", "Portal", "POR");
  }
}

module.exports = BogRaiders;
