"use strict";
const Constants = require ("../../../Constants");
const FrogmiteBase = require("../setDDF/Frogmite");

class Frogmite extends FrogmiteBase {
  constructor (game) {
    super(game, "Frogmite", "Modern Masters", "MMA");
  }
}

module.exports = Frogmite;
