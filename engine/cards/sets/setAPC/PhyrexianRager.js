"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PhyrexianRager extends Card {
  constructor(game) {
    super(game, "Phyrexian Rager", "Apocalypse", "APC");
  }
}

module.exports = PhyrexianRager;
