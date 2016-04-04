"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MerfolkSovereignBase = require("../setM10/MerfolkSovereign.js");

class MerfolkSovereign extends MerfolkSovereignBase {
  constructor(game) {
    super(game, "Merfolk Sovereign", "Magic 2011", "M11");
  }
}

module.exports = MerfolkSovereign;
