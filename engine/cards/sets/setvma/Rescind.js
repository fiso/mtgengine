"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RescindBase = require("../setUSG/Rescind.js");

class Rescind extends RescindBase {
  constructor(game) {
    super(game, "Rescind", "Vintage Masters", "VMA");
  }
}

module.exports = Rescind;
