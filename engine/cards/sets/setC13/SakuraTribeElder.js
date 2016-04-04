"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SakuraTribeElderBase = require("../setARC/SakuraTribeElder.js");

class SakuraTribeElder extends SakuraTribeElderBase {
  constructor(game) {
    super(game, "Sakura-Tribe Elder", "Commander 2013 Edition", "C13");
  }
}

module.exports = SakuraTribeElder;
