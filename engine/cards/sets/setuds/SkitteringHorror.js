"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SkitteringHorrorBase = require("../setBTD/SkitteringHorror.js");

class SkitteringHorror extends SkitteringHorrorBase {
  constructor(game) {
    super(game, "Skittering Horror", "Urza's Destiny", "UDS");
  }
}

module.exports = SkitteringHorror;
