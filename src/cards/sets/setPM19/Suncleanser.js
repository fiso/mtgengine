"use strict";
const Constants = require ("../../../Constants");
const SuncleanserBase = require("../setM19/Suncleanser");

class Suncleanser extends SuncleanserBase {
  constructor (game) {
    super(game, "Suncleanser", "Core Set 2019 Promos", "PM19");
  }
}

module.exports = Suncleanser;
