"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DracoBase = require("../setDRB/Draco.js");

class Draco extends DracoBase {
  constructor(game) {
    super(game, "Draco", "Planeshift", "PLS");
  }
}

module.exports = Draco;
