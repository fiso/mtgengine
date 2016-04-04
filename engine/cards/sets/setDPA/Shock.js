"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ShockBase = require("../setBTD/Shock.js");

class Shock extends ShockBase {
  constructor(game) {
    super(game, "Shock", "Duels of the Planeswalkers", "DPA");
  }
}

module.exports = Shock;
