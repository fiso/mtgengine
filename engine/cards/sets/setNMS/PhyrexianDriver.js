"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PhyrexianDriver extends Card {
  constructor(game) {
    super(game, "Phyrexian Driver", "Nemesis", "NMS");
  }
}

module.exports = PhyrexianDriver;
