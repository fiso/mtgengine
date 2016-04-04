"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AscendantEvincarBase = require("../setDPA/AscendantEvincar.js");

class AscendantEvincar extends AscendantEvincarBase {
  constructor(game) {
    super(game, "Ascendant Evincar", "Tenth Edition", "10E");
  }
}

module.exports = AscendantEvincar;
