"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SunlanceBase = require("../setDDO/Sunlance.js");

class Sunlance extends SunlanceBase {
  constructor(game) {
    super(game, "Sunlance", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = Sunlance;
