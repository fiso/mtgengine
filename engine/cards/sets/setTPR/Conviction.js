"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ConvictionBase = require("../setSTH/Conviction.js");

class Conviction extends ConvictionBase {
  constructor(game) {
    super(game, "Conviction", "Tempest Remastered", "TPR");
  }
}

module.exports = Conviction;
