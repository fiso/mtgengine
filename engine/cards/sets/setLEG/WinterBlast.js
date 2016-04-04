"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WinterBlastBase = require("../set5ED/WinterBlast.js");

class WinterBlast extends WinterBlastBase {
  constructor(game) {
    super(game, "Winter Blast", "Legends", "LEG");
  }
}

module.exports = WinterBlast;
