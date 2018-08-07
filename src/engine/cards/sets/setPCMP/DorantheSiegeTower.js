"use strict";
const Constants = require ("../../../Constants");
const DorantheSiegeTowerBase = require("../setJ17/DorantheSiegeTower");

class DorantheSiegeTower extends DorantheSiegeTowerBase {
  constructor (game) {
    super(game, "Doran, the Siege Tower", "Champs and States", "PCMP");
  }
}

module.exports = DorantheSiegeTower;
