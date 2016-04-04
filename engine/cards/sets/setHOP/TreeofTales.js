"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TreeofTalesBase = require("../setMRD/TreeofTales.js");

class TreeofTales extends TreeofTalesBase {
  constructor(game) {
    super(game, "Tree of Tales", "Planechase", "HOP");
  }
}

module.exports = TreeofTales;
