"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FiresofYavimayaBase = require("../setARC/FiresofYavimaya.js");

class FiresofYavimaya extends FiresofYavimayaBase {
  constructor(game) {
    super(game, "Fires of Yavimaya", "Invasion", "INV");
  }
}

module.exports = FiresofYavimaya;
