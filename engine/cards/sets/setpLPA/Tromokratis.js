"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TromokratisBase = require("../setBNG/Tromokratis.js");

class Tromokratis extends TromokratisBase {
  constructor(game) {
    super(game, "Tromokratis", "Launch Parties", "pLPA");
  }
}

module.exports = Tromokratis;
