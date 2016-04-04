"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ZhalfirinCrusaderBase = require("../setVMA/ZhalfirinCrusader.js");

class ZhalfirinCrusader extends ZhalfirinCrusaderBase {
  constructor(game) {
    super(game, "Zhalfirin Crusader", "Visions", "VIS");
  }
}

module.exports = ZhalfirinCrusader;
