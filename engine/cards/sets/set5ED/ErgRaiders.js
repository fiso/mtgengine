"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ErgRaidersBase = require("../setARN/ErgRaiders.js");

class ErgRaiders extends ErgRaidersBase {
  constructor(game) {
    super(game, "Erg Raiders", "Fifth Edition", "5ED");
  }
}

module.exports = ErgRaiders;
