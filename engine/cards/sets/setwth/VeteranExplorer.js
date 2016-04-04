"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const VeteranExplorerBase = require("../setCMD/VeteranExplorer.js");

class VeteranExplorer extends VeteranExplorerBase {
  constructor(game) {
    super(game, "Veteran Explorer", "Weatherlight", "WTH");
  }
}

module.exports = VeteranExplorer;
