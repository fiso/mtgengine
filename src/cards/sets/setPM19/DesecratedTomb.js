"use strict";
const Constants = require ("../../../Constants");
const DesecratedTombBase = require("../setM19/DesecratedTomb");

class DesecratedTomb extends DesecratedTombBase {
  constructor (game) {
    super(game, "Desecrated Tomb", "Core Set 2019 Promos", "PM19");
  }
}

module.exports = DesecratedTomb;
