"use strict";
const Constants = require ("../../../Constants");
const SindbadBase = require("../setARN/Sindbad");

class Sindbad extends SindbadBase {
  constructor (game) {
    super(game, "Sindbad", "Fourth Edition", "4ED");
  }
}

module.exports = Sindbad;
