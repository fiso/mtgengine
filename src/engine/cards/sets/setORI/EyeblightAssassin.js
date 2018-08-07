"use strict";
const Constants = require ("../../../Constants");
const EyeblightAssassinBase = require("../setBBD/EyeblightAssassin");

class EyeblightAssassin extends EyeblightAssassinBase {
  constructor (game) {
    super(game, "Eyeblight Assassin", "Magic Origins", "ORI");
  }
}

module.exports = EyeblightAssassin;
