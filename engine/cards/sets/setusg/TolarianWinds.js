"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TolarianWindsBase = require("../setBTD/TolarianWinds.js");

class TolarianWinds extends TolarianWindsBase {
  constructor(game) {
    super(game, "Tolarian Winds", "Urza's Saga", "USG");
  }
}

module.exports = TolarianWinds;
