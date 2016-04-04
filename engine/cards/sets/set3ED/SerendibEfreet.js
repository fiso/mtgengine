"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SerendibEfreetBase = require("../setARN/SerendibEfreet.js");

class SerendibEfreet extends SerendibEfreetBase {
  constructor(game) {
    super(game, "Serendib Efreet", "Revised Edition", "3ED");
  }
}

module.exports = SerendibEfreet;
