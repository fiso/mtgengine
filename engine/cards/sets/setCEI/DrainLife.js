"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DrainLifeBase = require("../setBTD/DrainLife.js");

class DrainLife extends DrainLifeBase {
  constructor(game) {
    super(game, "Drain Life", "International Collector's Edition", "CEI");
  }
}

module.exports = DrainLife;
