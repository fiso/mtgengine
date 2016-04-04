"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MeteoriteBase = require("../setM15/Meteorite.js");

class Meteorite extends MeteoriteBase {
  constructor(game) {
    super(game, "Meteorite", "Magic Origins", "ORI");
  }
}

module.exports = Meteorite;
