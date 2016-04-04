"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AvengerenDal extends Card {
  constructor(game) {
    super(game, "Avenger en-Dal", "Nemesis", "NMS");
  }
}

module.exports = AvengerenDal;
