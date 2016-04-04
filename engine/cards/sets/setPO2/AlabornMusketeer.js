"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AlabornMusketeerBase = require("../setME4/AlabornMusketeer.js");

class AlabornMusketeer extends AlabornMusketeerBase {
  constructor(game) {
    super(game, "Alaborn Musketeer", "Portal Second Age", "PO2");
  }
}

module.exports = AlabornMusketeer;
