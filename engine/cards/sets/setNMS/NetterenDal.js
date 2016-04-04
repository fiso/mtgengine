"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NetterenDal extends Card {
  constructor(game) {
    super(game, "Netter en-Dal", "Nemesis", "NMS");
  }
}

module.exports = NetterenDal;
