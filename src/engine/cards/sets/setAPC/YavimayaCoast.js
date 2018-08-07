"use strict";
const Constants = require ("../../../Constants");
const YavimayaCoastBase = require("../setORI/YavimayaCoast");

class YavimayaCoast extends YavimayaCoastBase {
  constructor (game) {
    super(game, "Yavimaya Coast", "Apocalypse", "APC");
  }
}

module.exports = YavimayaCoast;
