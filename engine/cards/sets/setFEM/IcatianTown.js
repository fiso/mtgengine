"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const IcatianTownBase = require("../set6ED/IcatianTown.js");

class IcatianTown extends IcatianTownBase {
  constructor(game) {
    super(game, "Icatian Town", "Fallen Empires", "FEM");
  }
}

module.exports = IcatianTown;
