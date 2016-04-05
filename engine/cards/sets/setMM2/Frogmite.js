"use strict";
const Constants = require ("../../../Constants");
const FrogmiteBase = require("../setDDF/Frogmite");

class Frogmite extends FrogmiteBase {
  constructor(game) {
    super(game, "Frogmite", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = Frogmite;
