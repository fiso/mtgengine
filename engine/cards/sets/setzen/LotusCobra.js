"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LotusCobraBase = require("../setpGPX/LotusCobra.js");

class LotusCobra extends LotusCobraBase {
  constructor(game) {
    super(game, "Lotus Cobra", "Zendikar", "ZEN");
  }
}

module.exports = LotusCobra;
