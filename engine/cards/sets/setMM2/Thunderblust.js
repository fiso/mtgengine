"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ThunderblustBase = require("../setEVE/Thunderblust.js");

class Thunderblust extends ThunderblustBase {
  constructor(game) {
    super(game, "Thunderblust", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = Thunderblust;
