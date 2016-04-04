"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DorantheSiegeTowerBase = require("../setpCMP/DorantheSiegeTower.js");

class DorantheSiegeTower extends DorantheSiegeTowerBase {
  constructor(game) {
    super(game, "Doran, the Siege Tower", "Lorwyn", "LRW");
  }
}

module.exports = DorantheSiegeTower;
