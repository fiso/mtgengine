"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FugueBase = require("../setEXO/Fugue.js");

class Fugue extends FugueBase {
  constructor(game) {
    super(game, "Fugue", "Tempest Remastered", "TPR");
  }
}

module.exports = Fugue;
