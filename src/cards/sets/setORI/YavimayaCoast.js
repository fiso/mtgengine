"use strict";
const Constants = require ("../../../Constants");
const YavimayaCoastBase = require("../setAPC/YavimayaCoast");

class YavimayaCoast extends YavimayaCoastBase {
  constructor (game) {
    super(game, "Yavimaya Coast", "Magic Origins", "ORI");
  }
}

module.exports = YavimayaCoast;
