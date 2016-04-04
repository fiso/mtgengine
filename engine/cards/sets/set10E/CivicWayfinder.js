"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CivicWayfinderBase = require("../setDPA/CivicWayfinder.js");

class CivicWayfinder extends CivicWayfinderBase {
  constructor(game) {
    super(game, "Civic Wayfinder", "Tenth Edition", "10E");
  }
}

module.exports = CivicWayfinder;
