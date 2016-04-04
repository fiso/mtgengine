"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const NantukoShamanBase = require("../setMMA/NantukoShaman.js");

class NantukoShaman extends NantukoShamanBase {
  constructor(game) {
    super(game, "Nantuko Shaman", "Time Spiral", "TSP");
  }
}

module.exports = NantukoShaman;
