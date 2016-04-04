"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CanopySpiderBase = require("../setATH/CanopySpider.js");

class CanopySpider extends CanopySpiderBase {
  constructor(game) {
    super(game, "Canopy Spider", "Tenth Edition", "10E");
  }
}

module.exports = CanopySpider;
