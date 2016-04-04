"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GrimBackwoodsBase = require("../setC13/GrimBackwoods.js");

class GrimBackwoods extends GrimBackwoodsBase {
  constructor(game) {
    super(game, "Grim Backwoods", "Dark Ascension", "DKA");
  }
}

module.exports = GrimBackwoods;
