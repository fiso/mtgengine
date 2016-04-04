"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LifelaceBase = require("../setCED/Lifelace.js");

class Lifelace extends LifelaceBase {
  constructor(game) {
    super(game, "Lifelace", "Revised Edition", "3ED");
  }
}

module.exports = Lifelace;
