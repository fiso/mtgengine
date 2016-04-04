"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const HuntingCheetahBase = require("../setME3/HuntingCheetah.js");

class HuntingCheetah extends HuntingCheetahBase {
  constructor(game) {
    super(game, "Hunting Cheetah", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = HuntingCheetah;
