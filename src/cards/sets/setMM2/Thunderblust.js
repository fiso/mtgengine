"use strict";
const Constants = require ("../../../Constants");
const ThunderblustBase = require("../setEVE/Thunderblust");

class Thunderblust extends ThunderblustBase {
  constructor(game) {
    super(game, "Thunderblust", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = Thunderblust;
