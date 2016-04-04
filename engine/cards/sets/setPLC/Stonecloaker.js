"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const StonecloakerBase = require("../setC13/Stonecloaker.js");

class Stonecloaker extends StonecloakerBase {
  constructor(game) {
    super(game, "Stonecloaker", "Planar Chaos", "PLC");
  }
}

module.exports = Stonecloaker;
