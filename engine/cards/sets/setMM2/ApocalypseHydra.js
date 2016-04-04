"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ApocalypseHydraBase = require("../setCON/ApocalypseHydra.js");

class ApocalypseHydra extends ApocalypseHydraBase {
  constructor(game) {
    super(game, "Apocalypse Hydra", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = ApocalypseHydra;
