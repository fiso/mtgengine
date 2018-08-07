"use strict";
const Constants = require ("../../../Constants");
const FiresofYavimayaBase = require("../setPCA/FiresofYavimaya");

class FiresofYavimaya extends FiresofYavimayaBase {
  constructor (game) {
    super(game, "Fires of Yavimaya", "Vintage Masters", "VMA");
  }
}

module.exports = FiresofYavimaya;
