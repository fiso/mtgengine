"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CursedScrollBase = require("../setTMP/CursedScroll.js");

class CursedScroll extends CursedScrollBase {
  constructor(game) {
    super(game, "Cursed Scroll", "Tempest Remastered", "TPR");
  }
}

module.exports = CursedScroll;
