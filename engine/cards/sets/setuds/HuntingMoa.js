"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const HuntingMoaBase = require("../setARC/HuntingMoa.js");

class HuntingMoa extends HuntingMoaBase {
  constructor(game) {
    super(game, "Hunting Moa", "Urza's Destiny", "UDS");
  }
}

module.exports = HuntingMoa;
