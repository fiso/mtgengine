"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SindbadBase = require("../setARN/Sindbad.js");

class Sindbad extends SindbadBase {
  constructor(game) {
    super(game, "Sindbad", "Fourth Edition", "4ED");
  }
}

module.exports = Sindbad;
