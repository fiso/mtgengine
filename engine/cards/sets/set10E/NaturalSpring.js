"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const NaturalSpringBase = require("../setDPA/NaturalSpring.js");

class NaturalSpring extends NaturalSpringBase {
  constructor(game) {
    super(game, "Natural Spring", "Tenth Edition", "10E");
  }
}

module.exports = NaturalSpring;
