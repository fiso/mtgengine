"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SeleniaDarkAngelBase = require("../setTMP/SeleniaDarkAngel.js");

class SeleniaDarkAngel extends SeleniaDarkAngelBase {
  constructor(game) {
    super(game, "Selenia, Dark Angel", "Tempest Remastered", "TPR");
  }
}

module.exports = SeleniaDarkAngel;
