"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ArcaneDenialBase = require("../setALL/ArcaneDenial.js");

class ArcaneDenial extends ArcaneDenialBase {
  constructor(game) {
    super(game, "Arcane Denial", "Masters Edition", "MED");
  }
}

module.exports = ArcaneDenial;
