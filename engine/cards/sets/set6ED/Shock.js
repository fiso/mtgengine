"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ShockBase = require("../setBTD/Shock.js");

class Shock extends ShockBase {
  constructor(game) {
    super(game, "Shock", "Classic Sixth Edition", "6ED");
  }
}

module.exports = Shock;
