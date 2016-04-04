"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DreambornMuseBase = require("../setLGN/DreambornMuse.js");

class DreambornMuse extends DreambornMuseBase {
  constructor(game) {
    super(game, "Dreamborn Muse", "Tenth Edition", "10E");
  }
}

module.exports = DreambornMuse;
