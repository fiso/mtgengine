"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CloudSpiritBase = require("../setME4/CloudSpirit.js");

class CloudSpirit extends CloudSpiritBase {
  constructor(game) {
    super(game, "Cloud Spirit", "Stronghold", "STH");
  }
}

module.exports = CloudSpirit;
