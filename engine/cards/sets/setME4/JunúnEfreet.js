"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const JunúnEfreetBase = require("../setARN/JunúnEfreet.js");

class JunúnEfreet extends JunúnEfreetBase {
  constructor(game) {
    super(game, "Junún Efreet", "Masters Edition IV", "ME4");
  }
}

module.exports = JunúnEfreet;
