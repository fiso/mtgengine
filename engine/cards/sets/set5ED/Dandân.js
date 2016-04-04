"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DandânBase = require("../setARN/Dandân.js");

class Dandân extends DandânBase {
  constructor(game) {
    super(game, "Dandân", "Fifth Edition", "5ED");
  }
}

module.exports = Dandân;
