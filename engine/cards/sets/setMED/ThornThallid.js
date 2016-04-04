"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ThornThallidBase = require("../setFEM/ThornThallid.js");

class ThornThallid extends ThornThallidBase {
  constructor(game) {
    super(game, "Thorn Thallid", "Masters Edition", "MED");
  }
}

module.exports = ThornThallid;
