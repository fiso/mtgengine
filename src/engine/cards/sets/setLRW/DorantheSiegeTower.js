"use strict";
const Constants = require ("../../../Constants");
const DorantheSiegeTowerBase = require("../setJ17/DorantheSiegeTower");

class DorantheSiegeTower extends DorantheSiegeTowerBase {
  constructor (game) {
    super(game, "Doran, the Siege Tower", "Lorwyn", "LRW");
  }
}

module.exports = DorantheSiegeTower;
