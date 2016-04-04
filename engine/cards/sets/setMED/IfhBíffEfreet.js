"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const IfhBíffEfreetBase = require("../setARN/IfhBíffEfreet.js");

class IfhBíffEfreet extends IfhBíffEfreetBase {
  constructor(game) {
    super(game, "Ifh-Bíff Efreet", "Masters Edition", "MED");
  }
}

module.exports = IfhBíffEfreet;
