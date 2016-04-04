"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ArcaneDenialBase = require("../setALL/ArcaneDenial.js");

class ArcaneDenial extends ArcaneDenialBase {
  constructor(game) {
    super(game, "Arcane Denial", "Commander 2013 Edition", "C13");
  }
}

module.exports = ArcaneDenial;
