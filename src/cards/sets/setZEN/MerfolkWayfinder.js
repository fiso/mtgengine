"use strict";
const Constants = require ("../../../Constants");
const MerfolkWayfinderBase = require("../setDDM/MerfolkWayfinder");

class MerfolkWayfinder extends MerfolkWayfinderBase {
  constructor (game) {
    super(game, "Merfolk Wayfinder", "Zendikar", "ZEN");
  }
}

module.exports = MerfolkWayfinder;
