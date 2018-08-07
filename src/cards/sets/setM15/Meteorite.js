"use strict";
const Constants = require ("../../../Constants");
const MeteoriteBase = require("../setORI/Meteorite");

class Meteorite extends MeteoriteBase {
  constructor (game) {
    super(game, "Meteorite", "Magic 2015", "M15");
  }
}

module.exports = Meteorite;
