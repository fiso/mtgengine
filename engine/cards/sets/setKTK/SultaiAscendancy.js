"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SultaiAscendancyBase = require("../setCPK/SultaiAscendancy.js");

class SultaiAscendancy extends SultaiAscendancyBase {
  constructor(game) {
    super(game, "Sultai Ascendancy", "Khans of Tarkir", "KTK");
  }
}

module.exports = SultaiAscendancy;
