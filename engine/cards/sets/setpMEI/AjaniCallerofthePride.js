"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AjaniCallerofthePrideBase = require("../setM13/AjaniCallerofthePride.js");

class AjaniCallerofthePride extends AjaniCallerofthePrideBase {
  constructor(game) {
    super(game, "Ajani, Caller of the Pride", "Media Inserts", "pMEI");
  }
}

module.exports = AjaniCallerofthePride;
