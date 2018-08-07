"use strict";
const Constants = require ("../../../Constants");
const ThornwealdArcherBase = require("../setCMA/ThornwealdArcher");

class ThornwealdArcher extends ThornwealdArcherBase {
  constructor (game) {
    super(game, "Thornweald Archer", "Commander 2014", "C14");
  }
}

module.exports = ThornwealdArcher;
