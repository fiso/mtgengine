"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const YavimayaCoastBase = require("../setAPC/YavimayaCoast.js");

class YavimayaCoast extends YavimayaCoastBase {
  constructor(game) {
    super(game, "Yavimaya Coast", "Magic Origins", "ORI");
  }
}

module.exports = YavimayaCoast;
