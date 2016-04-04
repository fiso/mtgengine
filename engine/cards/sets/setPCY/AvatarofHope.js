"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AvatarofHopeBase = require("../set8ED/AvatarofHope.js");

class AvatarofHope extends AvatarofHopeBase {
  constructor(game) {
    super(game, "Avatar of Hope", "Prophecy", "PCY");
  }
}

module.exports = AvatarofHope;
