"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SunblastAngelBase = require("../setC14/SunblastAngel.js");

class SunblastAngel extends SunblastAngelBase {
  constructor(game) {
    super(game, "Sunblast Angel", "Media Inserts", "pMEI");
  }
}

module.exports = SunblastAngel;
