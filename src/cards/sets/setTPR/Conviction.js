"use strict";
const Constants = require ("../../../Constants");
const ConvictionBase = require("../setAER/Conviction");

class Conviction extends ConvictionBase {
  constructor (game) {
    super(game, "Conviction", "Tempest Remastered", "TPR");
  }
}

module.exports = Conviction;
