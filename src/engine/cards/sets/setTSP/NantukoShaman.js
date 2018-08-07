"use strict";
const Constants = require ("../../../Constants");
const NantukoShamanBase = require("../setIMA/NantukoShaman");

class NantukoShaman extends NantukoShamanBase {
  constructor (game) {
    super(game, "Nantuko Shaman", "Time Spiral", "TSP");
  }
}

module.exports = NantukoShaman;
