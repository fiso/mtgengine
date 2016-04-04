"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const KarametrasAcolyteBase = require("../setpMEI/KarametrasAcolyte.js");

class KarametrasAcolyte extends KarametrasAcolyteBase {
  constructor(game) {
    super(game, "Karametra's Acolyte", "Theros", "THS");
  }
}

module.exports = KarametrasAcolyte;
