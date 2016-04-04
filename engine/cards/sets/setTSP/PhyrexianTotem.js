"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PhyrexianTotemBase = require("../setDDE/PhyrexianTotem.js");

class PhyrexianTotem extends PhyrexianTotemBase {
  constructor(game) {
    super(game, "Phyrexian Totem", "Time Spiral", "TSP");
  }
}

module.exports = PhyrexianTotem;
