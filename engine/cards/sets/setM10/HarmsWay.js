"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const HarmsWayBase = require("../setDDG/HarmsWay.js");

class HarmsWay extends HarmsWayBase {
  constructor(game) {
    super(game, "Harm's Way", "Magic 2010", "M10");
  }
}

module.exports = HarmsWay;
