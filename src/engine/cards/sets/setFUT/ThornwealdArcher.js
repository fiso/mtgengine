"use strict";
const Constants = require ("../../../Constants");
const ThornwealdArcherBase = require("../setCMA/ThornwealdArcher");

class ThornwealdArcher extends ThornwealdArcherBase {
  constructor (game) {
    super(game, "Thornweald Archer", "Future Sight", "FUT");
  }
}

module.exports = ThornwealdArcher;
