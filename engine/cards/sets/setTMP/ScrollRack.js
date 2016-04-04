"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ScrollRackBase = require("../setCM1/ScrollRack.js");

class ScrollRack extends ScrollRackBase {
  constructor(game) {
    super(game, "Scroll Rack", "Tempest", "TMP");
  }
}

module.exports = ScrollRack;
