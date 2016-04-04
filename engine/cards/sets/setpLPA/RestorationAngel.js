"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RestorationAngelBase = require("../setAVR/RestorationAngel.js");

class RestorationAngel extends RestorationAngelBase {
  constructor(game) {
    super(game, "Restoration Angel", "Launch Parties", "pLPA");
  }
}

module.exports = RestorationAngel;
