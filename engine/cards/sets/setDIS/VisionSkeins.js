"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const VisionSkeinsBase = require("../setC13/VisionSkeins.js");

class VisionSkeins extends VisionSkeinsBase {
  constructor(game) {
    super(game, "Vision Skeins", "Dissension", "DIS");
  }
}

module.exports = VisionSkeins;
