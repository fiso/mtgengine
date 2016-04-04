"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const KindleBase = require("../setTMP/Kindle.js");

class Kindle extends KindleBase {
  constructor(game) {
    super(game, "Kindle", "Tempest Remastered", "TPR");
  }
}

module.exports = Kindle;
