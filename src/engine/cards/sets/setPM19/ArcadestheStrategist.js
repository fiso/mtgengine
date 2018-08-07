"use strict";
const Constants = require ("../../../Constants");
const ArcadestheStrategistBase = require("../setM19/ArcadestheStrategist");

class ArcadestheStrategist extends ArcadestheStrategistBase {
  constructor (game) {
    super(game, "Arcades, the Strategist", "Core Set 2019 Promos", "PM19");
  }
}

module.exports = ArcadestheStrategist;
