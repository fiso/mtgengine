"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const IronhoofOxBase = require("../setME4/IronhoofOx.js");

class IronhoofOx extends IronhoofOxBase {
  constructor(game) {
    super(game, "Ironhoof Ox", "Portal Second Age", "PO2");
  }
}

module.exports = IronhoofOx;
