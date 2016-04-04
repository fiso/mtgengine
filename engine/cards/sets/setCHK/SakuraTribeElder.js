"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SakuraTribeElderBase = require("../setARC/SakuraTribeElder.js");

class SakuraTribeElder extends SakuraTribeElderBase {
  constructor(game) {
    super(game, "Sakura-Tribe Elder", "Champions of Kamigawa", "CHK");
  }
}

module.exports = SakuraTribeElder;
