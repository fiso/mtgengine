"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RithsCharmBase = require("../setDDE/RithsCharm.js");

class RithsCharm extends RithsCharmBase {
  constructor(game) {
    super(game, "Rith's Charm", "Planeshift", "PLS");
  }
}

module.exports = RithsCharm;
