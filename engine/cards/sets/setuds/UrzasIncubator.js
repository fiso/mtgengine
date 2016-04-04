"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const UrzasIncubatorBase = require("../setC15/UrzasIncubator.js");

class UrzasIncubator extends UrzasIncubatorBase {
  constructor(game) {
    super(game, "Urza's Incubator", "Urza's Destiny", "UDS");
  }
}

module.exports = UrzasIncubator;
