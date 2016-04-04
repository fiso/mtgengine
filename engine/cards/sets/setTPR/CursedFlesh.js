"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CursedFleshBase = require("../setEXO/CursedFlesh.js");

class CursedFlesh extends CursedFleshBase {
  constructor(game) {
    super(game, "Cursed Flesh", "Tempest Remastered", "TPR");
  }
}

module.exports = CursedFlesh;
