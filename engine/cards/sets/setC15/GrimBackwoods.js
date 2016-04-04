"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GrimBackwoodsBase = require("../setC13/GrimBackwoods.js");

class GrimBackwoods extends GrimBackwoodsBase {
  constructor(game) {
    super(game, "Grim Backwoods", "Commander 2015", "C15");
  }
}

module.exports = GrimBackwoods;
