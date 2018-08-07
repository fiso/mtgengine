"use strict";
const Constants = require ("../../../Constants");
const YavimayaCoastBase = require("../setORI/YavimayaCoast");

class YavimayaCoast extends YavimayaCoastBase {
  constructor (game) {
    super(game, "Yavimaya Coast", "Magic 2015", "M15");
  }
}

module.exports = YavimayaCoast;
