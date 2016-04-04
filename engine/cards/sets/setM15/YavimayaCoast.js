"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const YavimayaCoastBase = require("../setAPC/YavimayaCoast.js");

class YavimayaCoast extends YavimayaCoastBase {
  constructor(game) {
    super(game, "Yavimaya Coast", "Magic 2015 Core Set", "M15");
  }
}

module.exports = YavimayaCoast;
