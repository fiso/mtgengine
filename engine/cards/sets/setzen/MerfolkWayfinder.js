"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MerfolkWayfinderBase = require("../setDDM/MerfolkWayfinder.js");

class MerfolkWayfinder extends MerfolkWayfinderBase {
  constructor(game) {
    super(game, "Merfolk Wayfinder", "Zendikar", "ZEN");
  }
}

module.exports = MerfolkWayfinder;
