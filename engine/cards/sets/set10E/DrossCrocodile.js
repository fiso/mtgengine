"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DrossCrocodileBase = require("../set5DN/DrossCrocodile.js");

class DrossCrocodile extends DrossCrocodileBase {
  constructor(game) {
    super(game, "Dross Crocodile", "Tenth Edition", "10E");
  }
}

module.exports = DrossCrocodile;
