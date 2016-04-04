"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ThornwealdArcherBase = require("../setC14/ThornwealdArcher.js");

class ThornwealdArcher extends ThornwealdArcherBase {
  constructor(game) {
    super(game, "Thornweald Archer", "Future Sight", "FUT");
  }
}

module.exports = ThornwealdArcher;
