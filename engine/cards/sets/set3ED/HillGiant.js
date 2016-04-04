"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const HillGiantBase = require("../setCED/HillGiant.js");

class HillGiant extends HillGiantBase {
  constructor(game) {
    super(game, "Hill Giant", "Revised Edition", "3ED");
  }
}

module.exports = HillGiant;
