"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CloudDragonBase = require("../setME4/CloudDragon.js");

class CloudDragon extends CloudDragonBase {
  constructor(game) {
    super(game, "Cloud Dragon", "Portal", "POR");
  }
}

module.exports = CloudDragon;
