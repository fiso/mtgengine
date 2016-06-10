"use strict";
const Constants = require ("../../../Constants");
const FiresofYavimayaBase = require("../setARC/FiresofYavimaya");

class FiresofYavimaya extends FiresofYavimayaBase {
  constructor (game) {
    super(game, "Fires of Yavimaya", "Commander 2013 Edition", "C13");
  }
}

module.exports = FiresofYavimaya;
