"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LifelaceBase = require("../setCED/Lifelace.js");

class Lifelace extends LifelaceBase {
  constructor(game) {
    super(game, "Lifelace", "Fourth Edition", "4ED");
  }
}

module.exports = Lifelace;
