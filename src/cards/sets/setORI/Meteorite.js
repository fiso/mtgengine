"use strict";
const Constants = require ("../../../Constants");
const MeteoriteBase = require("../setM15/Meteorite");

class Meteorite extends MeteoriteBase {
  constructor(game) {
    super(game, "Meteorite", "Magic Origins", "ORI");
  }
}

module.exports = Meteorite;
