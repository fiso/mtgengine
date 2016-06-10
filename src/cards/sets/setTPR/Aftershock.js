"use strict";
const Constants = require ("../../../Constants");
const AftershockBase = require("../setTMP/Aftershock");

class Aftershock extends AftershockBase {
  constructor (game) {
    super(game, "Aftershock", "Tempest Remastered", "TPR");
  }
}

module.exports = Aftershock;
